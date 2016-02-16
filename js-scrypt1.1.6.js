var scrypt_module_factory=function(requested_total_memory){function g(e){throw e}function aa(){return function(){}}function ia(e){eval.call(m,e)}function ja(){return u}function ka(e){u=e}function la(e){if(1==ma)return 1
var r={"%i1":1,"%i8":1,"%i16":2,"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+e]
return r||("*"==e.charAt(e.length-1)?r=ma:"i"==e[0]&&(e=parseInt(e.substr(1)),w(0==e%8),r=e/8)),r}function na(e,r,t){t&&t.length?(t.splice||(t=Array.prototype.slice.call(t)),t.splice(0,0,r),s["dynCall_"+e].apply(m,t)):s["dynCall_"+e].call(m,r)}function pa(){var e=[],r=0
this.oa=function(t){if(t&=255,r&&(e.push(t),r--),0==e.length)return 128>t?String.fromCharCode(t):(e.push(t),r=t>191&&224>t?1:2,"")
if(r>0)return""
var t=e[0],i=e[1],n=e[2],t=t>191&&224>t?String.fromCharCode((31&t)<<6|63&i):String.fromCharCode((15&t)<<12|(63&i)<<6|63&n)
return e.length=0,t},this.yb=function(e){for(var e=unescape(encodeURIComponent(e)),r=[],t=0;t<e.length;t++)r.push(e.charCodeAt(t))
return r}}function qa(e){var r=u
return u=u+e|0,u=u+7>>3<<3,r}function ra(e){var r=sa
return sa=sa+e|0,sa=sa+7>>3<<3,r}function ua(e){var r=z
return z=z+e|0,z=z+7>>3<<3,z>=va&&wa("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, or (2) set Module.TOTAL_MEMORY before the program runs."),r}function xa(e,r){return Math.ceil(e/(r?r:8))*(r?r:8)}function w(e,r){e||wa("Assertion failed: "+r)}function Ca(a){try{var b=s["_"+a]
b||(b=eval("_"+a))}catch(c){}return w(b,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)"),b}function Ba(e,r,t,i){function n(e,r){if("string"==r){if(e===m||e===k||0===e)return 0
a||(a=ja())
var t=qa(e.length+1)
return Da(e,t),t}return"array"==r?(a||(a=ja()),t=qa(e.length),Ea(e,t),t):e}var a=0,o=0,i=i?i.map(function(e){return n(e,t[o++])}):[]
return e=e.apply(m,i),"string"==r?r=Fa(e):(w("array"!=r),r=e),a&&ka(a),r}function Ga(e,r,t){switch(t=t||"i8","*"===t.charAt(t.length-1)&&(t="i32"),t){case"i1":A[e]=r
break
case"i8":A[e]=r
break
case"i16":Ha[e>>1]=r
break
case"i32":B[e>>2]=r
break
case"i64":Aa=[r>>>0,(0|Math.min(+Math.floor(r/4294967296),4294967295))>>>0],B[e>>2]=Aa[0],B[e+4>>2]=Aa[1]
break
case"float":Ia[e>>2]=r
break
case"double":Ja[e>>3]=r
break
default:wa("invalid type for setValue: "+t)}}function F(e,r,t,i){var n,a
"number"==typeof e?(n=l,a=e):(n=p,a=e.length)
var o="string"==typeof r?r:m,t=t==Na?i:[Oa,qa,ra,ua][t===k?E:t](Math.max(a,o?1:r.length))
if(n){for(i=t,w(0==(3&t)),e=t+(-4&a);e>i;i+=4)B[i>>2]=0
for(e=t+a;e>i;)A[0|i++]=0
return t}if("i8"===o)return e.subarray||e.slice?G.set(e,t):G.set(new Uint8Array(e),t),t
for(var s,f,i=0;a>i;){var c=e[i]
"function"==typeof c&&(c=ya.fe(c)),n=o||r[i],0===n?i++:("i64"==n&&(n="i32"),Ga(t+i,c,n),f!==n&&(s=la(n),f=n),i+=s)}return t}function Fa(e,r){for(var t,i=p,n=0;;){if(t=G[e+n|0],t>=128)i=l
else if(0==t&&!r)break
if(n++,r&&n==r)break}r||(r=n)
var a=""
if(!i){for(;r>0;)t=String.fromCharCode.apply(String,G.subarray(e,e+Math.min(r,1024))),a=a?a+t:t,e+=1024,r-=1024
return a}for(i=new pa,n=0;r>n;n++)t=G[e+n|0],a+=i.oa(t)
return a}function Va(e){for(;0<e.length;){var r=e.shift()
if("function"==typeof r)r()
else{var t=r.V
"number"==typeof t?r.ha===k?na("v",t):na("vi",t,[r.ha]):t(r.ha===k?m:r.ha)}}}function bb(e){Wa.unshift(e)}function cb(e){$a.unshift(e)}function J(e,r,t){return e=(new pa).yb(e),t&&(e.length=t),r||e.push(0),e}function Da(e,r,t){for(e=J(e,t),t=0;t<e.length;)A[r+t|0]=e[t],t+=1}function Ea(e,r){for(var t=0;t<e.length;t++)A[r+t|0]=e[t]}function db(e,r){return e>=0?e:32>=r?2*Math.abs(1<<r-1)+e:Math.pow(2,r)+e}function eb(e,r){if(0>=e)return e
var t=32>=r?Math.abs(1<<r-1):Math.pow(2,r-1)
return e>=t&&(32>=r||e>t)&&(e=-2*t+e),e}function ib(e){L++,s.monitorRunDependencies&&s.monitorRunDependencies(L),e?(w(!fb[e]),fb[e]=1):s.P("warning: run dependency added without ID")}function jb(e){L--,s.monitorRunDependencies&&s.monitorRunDependencies(L),e?(w(fb[e]),delete fb[e]):s.P("warning: run dependency removed without ID"),0==L&&(hb!==m&&(clearInterval(hb),hb=m),!gb&&kb&&lb())}function M(e){return B[rb>>2]=e}function vb(e,r,t){var i=O(e,{parent:l}).d,e="/"===e?"/":wb(e)[2],n=xb(i,e)
return n&&g(new Q(n)),i.l.Ta||g(new Q(N.L)),i.l.Ta(i,e,r,t)}function yb(e,r){return r=4095&r|32768,vb(e,r,0)}function zb(e,r){return r=1023&r|16384,vb(e,r,0)}function Ab(e,r,t){return vb(e,8192|r,t)}function Bb(e,r){var t=O(r,{parent:l}).d,i="/"===r?"/":wb(r)[2],n=xb(t,i)
return n&&g(new Q(n)),t.l.Wa||g(new Q(N.L)),t.l.Wa(t,i,e)}function Cb(e,r){var t
t="string"==typeof e?O(e,{N:l}).d:e,t.l.Y||g(new Q(N.L)),t.l.Y(t,{mode:4095&r|-4096&t.mode,timestamp:Date.now()})}function Db(e,r){var t,i,e=Eb(e)
"string"==typeof r?(i=Fb[r],void 0===i&&g(Error("Unknown file open mode: "+r))):i=r,r=i,t=512&r?4095&t|32768:0
var n
try{var a=O(e,{N:!(65536&r)})
n=a.d,e=a.path}catch(o){}512&r&&(n?2048&r&&g(new Q(N.va)):n=vb(e,t,0)),n||g(new Q(N.ca)),8192===(61440&n.mode)&&(r&=-1025),n?40960===(61440&n.mode)?t=N.ba:16384===(61440&n.mode)&&(0!==(3&r)||1024&r)?t=N.aa:(t=["r","w","rw"][3&r],1024&r&&(t+="w"),t=Gb(n,t)):t=N.ca,t&&g(new Q(t)),1024&r&&(t=n,t="string"==typeof t?O(t,{N:l}).d:t,t.l.Y||g(new Q(N.L)),16384===(61440&t.mode)&&g(new Q(N.aa)),32768!==(61440&t.mode)&&g(new Q(N.A)),(a=Gb(t,"w"))&&g(new Q(a)),t.l.Y(t,{size:0,timestamp:Date.now()}))
var s,f={path:e,d:n,M:r,seekable:l,position:0,e:n.e,Gb:[],error:p}
e:{for(n=k||4096,t=k||1;n>=t;t++)if(!R[t]){s=t
break e}g(new Q(N.Za))}return f.s=s,Object.defineProperty(f,"object",{get:function(){return f.d},set:function(e){f.d=e}}),Object.defineProperty(f,"isRead",{get:function(){return 1!==(3&f.M)}}),Object.defineProperty(f,"isWrite",{get:function(){return 0!==(3&f.M)}}),Object.defineProperty(f,"isAppend",{get:function(){return 8&f.M}}),R[s]=f,f.e.open&&f.e.open(f),f}function Hb(e){try{e.e.close&&e.e.close(e)}catch(r){g(r)}finally{R[e.s]=m}}function Ib(e,r,t,i,n){(0>i||0>n)&&g(new Q(N.A)),0===(3&e.M)&&g(new Q(N.$)),16384===(61440&e.d.mode)&&g(new Q(N.aa)),e.e.write||g(new Q(N.A))
var a=l
return void 0===n?(n=e.position,a=p):e.seekable||g(new Q(N.da)),8&e.M&&((!e.seekable||!e.e.na)&&g(new Q(N.da)),e.e.na(e,0,2)),r=e.e.write(e,r,t,i,n),a||(e.position+=r),r}function wb(e){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)}function Jb(e,r){for(var t=0,i=e.length-1;i>=0;i--){var n=e[i]
"."===n?e.splice(i,1):".."===n?(e.splice(i,1),t++):t&&(e.splice(i,1),t--)}if(r)for(;t--;t)e.unshift("..")
return e}function Eb(e){var r="/"===e.charAt(0),t="/"===e.substr(-1),e=Jb(e.split("/").filter(function(e){return!!e}),!r).join("/")
return!e&&!r&&(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function S(){var e=Array.prototype.slice.call(arguments,0)
return Eb(e.filter(function(e){return"string"!=typeof e&&g(new TypeError("Arguments to path.join must be strings")),e}).join("/"))}function Kb(){for(var e="",r=p,t=arguments.length-1;t>=-1&&!r;t--){var i=t>=0?arguments[t]:"/"
"string"!=typeof i&&g(new TypeError("Arguments to path.resolve must be strings")),i&&(e=i+"/"+e,r="/"===i.charAt(0))}return e=Jb(e.split("/").filter(function(e){return!!e}),!r).join("/"),(r?"/":"")+e||"."}function Mb(e,r){Lb[e]={input:[],H:[],O:r},Nb[e]={e:Ob}}function Q(e){this.mb=e
for(var r in N)if(N[r]===e){this.code=r
break}this.message=ub[e]}function Zb(e){e instanceof Q||g(e+" : "+Error().stack),M(e.mb)}function $b(e,r){for(var t=0,i=0;i<r.length;i++)t=(t<<5)-t+r.charCodeAt(i)|0
return(e+t)%Xb.length}function Sb(e,r){var t=Gb(e,"x")
for(t&&g(new Q(t)),t=Xb[$b(e.id,r)];t;t=t.wb)if(t.parent.id===e.id&&t.name===r)return t
return e.l.tb(e,r)}function Qb(e,r,t,i){var n={id:Wb++,name:r,mode:t,l:{},e:{},X:i,parent:m,z:m}
return e||(e=n),n.parent=e,n.z=e.z,Object.defineProperty(n,"read",{get:function(){return 365===(365&n.mode)},set:function(e){e?n.mode|=365:n.mode&=-366}}),Object.defineProperty(n,"write",{get:function(){return 146===(146&n.mode)},set:function(e){e?n.mode|=146:n.mode&=-147}}),e=$b(n.parent.id,n.name),n.wb=Xb[e],Xb[e]=n}function O(e,r){e=Kb("/",e),r=r||{pa:0},8<r.pa&&g(new Q(N.ba))
for(var t=Jb(e.split("/").filter(function(e){return!!e}),p),i=Vb,n="/",a=0;a<t.length;a++){var o=a===t.length-1
if(o&&r.parent)break
if(i=Sb(i,t[a]),n=S(n,t[a]),i.ub&&(i=i.z.root),!o||r.N)for(o=0;40960===(61440&i.mode);){i=O(n,{N:p}).d,i.l.Va||g(new Q(N.A))
var i=i.l.Va(i),s=Kb,f=wb(n),n=f[0],f=f[1]
n||f?(f&&(f=f.substr(0,f.length-1)),n+=f):n=".",n=s(n,i),i=O(n,{pa:r.pa}).d,40<o++&&g(new Q(N.ba))}}return{path:n,d:i}}function ac(e){for(var r;;){if(e===e.parent)return r?S(e.z.Ua,r):e.z.Ua
r=r?S(e.name,r):e.name,e=e.parent}}function Gb(e,r){return Yb?0:(-1===r.indexOf("r")||292&e.mode)&&(-1===r.indexOf("w")||146&e.mode)&&(-1===r.indexOf("x")||73&e.mode)?0:N.Ya}function xb(e,r){try{return Sb(e,r),N.va}catch(t){}return Gb(e,"wx")}function cc(e,r){var t=0
return e&&(t|=365),r&&(t|=146),t}function dc(e,r,t,i,n){if(e=S("string"==typeof e?e:ac(e),r),i=cc(i,n),n=yb(e,i),t){if("string"==typeof t){for(var r=Array(t.length),a=0,o=t.length;o>a;++a)r[a]=t.charCodeAt(a)
t=r}Cb(e,146|i),r=Db(e,"w"),Ib(r,t,0,t.length,0),Hb(r),Cb(e,i)}return n}function ec(e,r,t,i){return e=S("string"==typeof e?e:ac(e),r),ec.Sa||(ec.Sa=64),r=ec.Sa++<<8|0,Nb[r]={e:{open:function(e){e.seekable=p},close:function(){i&&i.buffer&&i.buffer.length&&i(10)},Q:function(e,r,i,n){for(var a=0,o=0;n>o;o++){var s
try{s=t()}catch(f){g(new Q(N.I))}if(s===k&&0===a&&g(new Q(N.ua)),s===m||s===k)break
a++,r[i+o]=s}return a&&(e.d.timestamp=Date.now()),a},write:function(e,r,t,n){for(var a=0;n>a;a++)try{i(r[t+a])}catch(o){g(new Q(N.I))}return n&&(e.d.timestamp=Date.now()),a}}},Ab(e,t&&i?511:t?219:365,r)}function fc(e,r,t){return(e=R[e])?(e.sender(G.subarray(r,r+t)),t):-1}function gc(e,r,t){var i=R[e]
if(!i)return M(N.$),-1
if(i&&"socket"in i)return fc(e,r,t)
try{return Ib(i,A,r,t)}catch(n){return Zb(n),-1}}function hc(e,r,t,i){return t*=r,0==t?0:(e=gc(i,e,t),-1==e?((r=R[i])&&(r.error=l),0):Math.floor(e/r))}function jc(e){return 0>e||0===e&&-(1/0)===1/e}function kc(e,r){function t(e){var t
return"double"===e?t=Ja[r+o>>3]:"i64"==e?(t=[B[r+o>>2],B[r+(o+8)>>2]],o+=8):(e="i32",t=B[r+o>>2]),o+=Math.max(Math.max(la(e),ma),8),t}for(var i,n,a=e,o=0,s=[];;){var f=a
if(i=A[a],0===i)break
if(n=A[a+1|0],37==i){var c=p,u=p,h=p,b=p
e:for(;;){switch(n){case 43:c=l
break
case 45:u=l
break
case 35:h=l
break
case 48:if(b)break e
b=l
break
default:break e}a++,n=A[a+1|0]}var d=0
if(42==n)d=t("i32"),a++,n=A[a+1|0]
else for(;n>=48&&57>=n;)d=10*d+(n-48),a++,n=A[a+1|0]
var v=p
if(46==n){var w=0,v=l
if(a++,n=A[a+1|0],42==n)w=t("i32"),a++
else for(;n=A[a+1|0],!(48>n||n>57);)w=10*w+(n-48),a++
n=A[a+1|0]}else w=6
var k
switch(String.fromCharCode(n)){case"h":n=A[a+2|0],104==n?(a++,k=1):k=2
break
case"l":n=A[a+2|0],108==n?(a++,k=8):k=4
break
case"L":case"q":case"j":k=8
break
case"z":case"t":case"I":k=4
break
default:k=m}switch(k&&a++,n=A[a+1|0],String.fromCharCode(n)){case"d":case"i":case"u":case"o":case"x":case"X":case"p":f=100==n||105==n,k=k||4
var g,_=i=t("i"+8*k)
8==k&&(i=117==n?+(i[0]>>>0)+4294967296*+(i[1]>>>0):+(i[0]>>>0)+4294967296*+(0|i[1])),4>=k&&(i=(f?eb:db)(i&Math.pow(256,k)-1,8*k))
var y=Math.abs(i),f=""
if(100==n||105==n)g=8==k&&lc?lc.stringify(_[0],_[1],m):eb(i,8*k).toString(10)
else if(117==n)g=8==k&&lc?lc.stringify(_[0],_[1],l):db(i,8*k).toString(10),i=Math.abs(i)
else if(111==n)g=(h?"0":"")+y.toString(8)
else if(120==n||88==n){if(f=h&&0!=i?"0x":"",8==k&&lc)if(_[1]){for(g=(_[1]>>>0).toString(16),h=(_[0]>>>0).toString(16);8>h.length;)h="0"+h
g+=h}else g=(_[0]>>>0).toString(16)
else if(0>i){for(i=-i,g=(y-1).toString(16),_=[],h=0;h<g.length;h++)_.push((15-parseInt(g[h],16)).toString(16))
for(g=_.join("");g.length<2*k;)g="f"+g}else g=y.toString(16)
88==n&&(f=f.toUpperCase(),g=g.toUpperCase())}else 112==n&&(0===y?g="(nil)":(f="0x",g=y.toString(16)))
if(v)for(;g.length<w;)g="0"+g
for(c&&(f=0>i?"-"+f:"+"+f);f.length+g.length<d;)u?g+=" ":b?g="0"+g:f=" "+f
g=f+g,g.split("").forEach(function(e){s.push(e.charCodeAt(0))})
break
case"f":case"F":case"e":case"E":case"g":case"G":if(i=t("double"),isNaN(i))g="nan",b=p
else if(isFinite(i)){if(v=p,k=Math.min(w,20),(103==n||71==n)&&(v=l,w=w||1,k=parseInt(i.toExponential(k).split("e")[1],10),w>k&&k>=-4?(n=(103==n?"f":"F").charCodeAt(0),w-=k+1):(n=(103==n?"e":"E").charCodeAt(0),w--),k=Math.min(w,20)),101==n||69==n?(g=i.toExponential(k),/[eE][-+]\d$/.test(g)&&(g=g.slice(0,-1)+"0"+g.slice(-1))):(102==n||70==n)&&(g=i.toFixed(k),0===i&&jc(i)&&(g="-"+g)),f=g.split("e"),v&&!h)for(;1<f[0].length&&-1!=f[0].indexOf(".")&&("0"==f[0].slice(-1)||"."==f[0].slice(-1));)f[0]=f[0].slice(0,-1)
else for(h&&-1==g.indexOf(".")&&(f[0]+=".");w>k++;)f[0]+="0"
g=f[0]+(1<f.length?"e"+f[1]:""),69==n&&(g=g.toUpperCase()),c&&i>=0&&(g="+"+g)}else g=(0>i?"-":"")+"inf",b=p
for(;g.length<d;)g=u?g+" ":!b||"-"!=g[0]&&"+"!=g[0]?(b?"0":" ")+g:g[0]+"0"+g.slice(1)
97>n&&(g=g.toUpperCase()),g.split("").forEach(function(e){s.push(e.charCodeAt(0))})
break
case"s":if(b=(c=t("i8*"))?ic(c):6,v&&(b=Math.min(b,w)),!u)for(;b<d--;)s.push(32)
if(c)for(h=0;b>h;h++)s.push(G[0|c++])
else s=s.concat(J("(null)".substr(0,b),l))
if(u)for(;b<d--;)s.push(32)
break
case"c":for(u&&s.push(t("i8"));0<--d;)s.push(32)
u||s.push(t("i8"))
break
case"n":u=t("i32*"),B[u>>2]=s.length
break
case"%":s.push(i)
break
default:for(h=f;a+2>h;h++)s.push(A[h])}a+=2}else s.push(i),a+=1}return s}function mc(e,r,t){return t=kc(r,t),r=ja(),e=hc(F(t,"i8",La),1,t.length,e),ka(r),e}function nc(e){nc.ia||(z=z+4095>>12<<12,nc.ia=l,w(ua),nc.hb=ua,ua=function(){wa("cannot dynamically allocate, sbrk now has control")})
var r=z
return 0!=e&&nc.hb(e),r}function U(){return B[U.m>>2]}function oc(){return!!oc.ta}function pc(e){var r=p
try{e==__ZTIi&&(r=l)}catch(t){}try{e==__ZTIj&&(r=l)}catch(i){}try{e==__ZTIl&&(r=l)}catch(n){}try{e==__ZTIm&&(r=l)}catch(a){}try{e==__ZTIx&&(r=l)}catch(o){}try{e==__ZTIy&&(r=l)}catch(s){}try{e==__ZTIf&&(r=l)}catch(f){}try{e==__ZTId&&(r=l)}catch(c){}try{e==__ZTIe&&(r=l)}catch(u){}try{e==__ZTIc&&(r=l)}catch(h){}try{e==__ZTIa&&(r=l)}catch(b){}try{e==__ZTIh&&(r=l)}catch(d){}try{e==__ZTIs&&(r=l)}catch(v){}try{e==__ZTIt&&(r=l)}catch(w){}return r}function qc(e,r,t){if(0==t)return p
if(0==r||r==e)return l
switch(pc(r)?r:B[B[r>>2]-8>>2]){case 0:return 0==B[B[e>>2]-8>>2]?qc(B[e+8>>2],B[r+8>>2],t):p
case 1:return p
case 2:return qc(e,B[r+8>>2],t)
default:return p}}function rc(e,r,t){if(!rc.sb){try{B[__ZTVN10__cxxabiv119__pointer_type_infoE>>2]=0}catch(i){}try{B[pb>>2]=1}catch(n){}try{B[ob>>2]=2}catch(a){}rc.sb=l}B[U.m>>2]=e,B[U.m+4>>2]=r,B[U.m+8>>2]=t,"uncaught_exception"in oc?oc.ta++:oc.ta=1,g(e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")}function sc(e){try{return tc(e)}catch(r){}}function uc(){if(uc.Bb)uc.Bb=p
else{V.setThrew(0),B[U.m+4>>2]=0
var e=B[U.m>>2],r=B[U.m+8>>2]
r&&(na("vi",r,[e]),B[U.m+8>>2]=0),e&&(sc(e),B[U.m>>2]=0)}}function wc(e){var r,t
wc.ia?(t=B[vc>>2],r=B[t>>2]):(wc.ia=l,W.USER="root",W.PATH="/",W.PWD="/",W.HOME="/home/emscripten",W.LANG="en_US.UTF-8",W._="./this.program",r=F(1024,"i8",E),t=F(256,"i8*",E),B[t>>2]=r,B[vc>>2]=t)
var i,n=[],a=0
for(i in e)if("string"==typeof e[i]){var o=i+"="+e[i]
n.push(o),a+=o.length}for(a>1024&&g(Error("Environment size exceeded TOTAL_ENV_SIZE!")),e=0;e<n.length;e++){for(o=n[e],a=0;a<o.length;a++)A[r+a|0]=o.charCodeAt(a)
A[r+a|0]=0,B[t+4*e>>2]=r,r+=o.length+1}B[t+4*n.length>>2]=0}function xc(e){return 0===e?0:(e=Fa(e),W.hasOwnProperty(e)?(xc.J&&tc(xc.J),xc.J=F(J(W[e]),"i8",Ka),xc.J):0)}function yc(e,r,t){if(e in ub){if(ub[e].length>t-1)return M(N.ab)
for(e=ub[e],t=0;t<e.length;t++)A[r+t|0]=e.charCodeAt(t)
return A[r+t|0]=0}return M(N.A)}function zc(e){return zc.buffer||(zc.buffer=Oa(256)),yc(e,zc.buffer,256),zc.buffer}function Ac(e){s.exit(e)}function Bc(e,r){var t=db(255&e)
return A[0|Bc.J]=t,-1==gc(r,Bc.J,1)?((t=R[r])&&(t.error=l),-1):t}function Ic(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]}function Kc(){var e=s.canvas
Jc.forEach(function(r){r(e.width,e.height)})}function Lc(){var e=s.canvas
this.Ib=e.width,this.Hb=e.height,e.width=screen.width,e.height=screen.height,"undefined"!=typeof SDL&&(e=Qa[SDL.screen+0*ma>>2],B[SDL.screen+0*ma>>2]=8388608|e),Kc()}function Mc(){var e=s.canvas
e.width=this.Ib,e.height=this.Hb,"undefined"!=typeof SDL&&(e=Qa[SDL.screen+0*ma>>2],B[SDL.screen+0*ma>>2]=-8388609&e),Kc()}function X(e,r){e!=m&&("number"==typeof e?this.p(e):r==m&&"string"!=typeof e?this.k(e,256):this.k(e,r))}function Yc(){return new X(m)}function Zc(e,r){var t=$c[e.charCodeAt(r)]
return t==m?-1:t}function ad(e){var r=Yc()
return r.D(e),r}function Y(e,r){this.h=0|e,this.j=0|r}function lb(e){function r(){if(ab||(ab=l,Va(Xa)),Va(Ya),gb=l,s._main&&kb&&s.callMain(e),s.postRun)for("function"==typeof s.postRun&&(s.postRun=[s.postRun]);s.postRun.length;)cb(s.postRun.shift())
Va($a)}if(e=e||s.arguments,L>0)s.P("run() called, but dependencies remain, so not running")
else{if(s.preRun)for("function"==typeof s.preRun&&(s.preRun=[s.preRun]);s.preRun.length;)bb(s.preRun.shift())
Va(Wa),L>0||(s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),za||r()},1)):r())}}function ed(e){za=l,u=cd,Va(Za),dd&&g({type:"ExitStatus",value:e})}function wa(e){e&&s.print(e),za=l,g("abort() at "+Error().stack)}var Module={TOTAL_MEMORY:requested_total_memory||33554432},scrypt_raw=Module,k=void 0,l=!0,m=null,p=!1,q,s
s||(s=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"))
var ba={},t
for(t in s)s.hasOwnProperty(t)&&(ba[t]=s[t])
var ca="object"==typeof process&&"function"==typeof require,da="object"==typeof window,ea="function"==typeof importScripts,fa=!da&&!ca&&!ea
if(ca){s.print=function(e){process.stdout.write(e+"\n")},s.printErr=function(e){process.stderr.write(e+"\n")}
var ga=require("fs"),ha=require("path")
s.read=function(e,r){var e=ha.normalize(e),t=ga.readFileSync(e)
return!t&&e!=ha.resolve(e)&&(e=path.join(__dirname,"..","src",e),t=ga.readFileSync(e)),t&&!r&&(t=""+t),t},s.readBinary=function(e){return s.read(e,l)},s.load=function(e){ia(read(e))},s.arguments=process.argv.slice(2),module.ee=s}else fa?(s.print=print,"undefined"!=typeof printErr&&(s.printErr=printErr),s.read=read,s.readBinary=function(e){return read(e,"binary")},"undefined"!=typeof scriptArgs?s.arguments=scriptArgs:"undefined"!=typeof arguments&&(s.arguments=arguments),this.Module=s):da||ea?(s.read=function(e){var r=new XMLHttpRequest
return r.open("GET",e,p),r.send(m),r.responseText},"undefined"!=typeof arguments&&(s.arguments=arguments),da?(s.print=function(e){console.log(e)},s.printErr=function(e){console.log(e)},this.Module=s):ea&&(s.print=aa(),s.load=importScripts)):g("Unknown runtime environment. Where are we?")
"undefined"==!s.load&&s.read&&(s.load=function(e){ia(s.read(e))}),s.print||(s.print=aa()),s.printErr||(s.printErr=s.print),s.arguments||(s.arguments=[]),s.print=s.print,s.P=s.printErr,s.preRun=[],s.postRun=[]
for(t in ba)ba.hasOwnProperty(t)&&(s[t]=ba[t])
var oa,ma=4,ya={},za=p,Aa
s.ccall=function(e,r,t,i){return Ba(Ca(e),r,t,i)},s.cwrap=function(e,r,t){var i=Ca(e)
return function(){return Ba(i,r,t,Array.prototype.slice.call(arguments))}},s.setValue=Ga,s.getValue=function(e,r){switch(r=r||"i8","*"===r.charAt(r.length-1)&&(r="i32"),r){case"i1":return A[e]
case"i8":return A[e]
case"i16":return Ha[e>>1]
case"i32":return B[e>>2]
case"i64":return B[e>>2]
case"float":return Ia[e>>2]
case"double":return Ja[e>>3]
default:wa("invalid type for setValue: "+r)}return m}
var Ka=0,La=1,E=2,Na=4
s.ALLOC_NORMAL=Ka,s.ALLOC_STACK=La,s.ALLOC_STATIC=E,s.ALLOC_DYNAMIC=3,s.ALLOC_NONE=Na,s.allocate=F,s.Pointer_stringify=Fa
var A,G,Ha,Pa,B,Qa,Ia,Ja,Ra=0,sa=0,Sa=0,u=0,Ta=0,Ua=0,z=0,va=s.TOTAL_MEMORY||33554432
w(!!(Int32Array&&Float64Array&&new Int32Array(1).subarray&&new Int32Array(1).set),"Cannot fallback to non-typed array case: Code is too specialized")
var I=new ArrayBuffer(va)
A=new Int8Array(I),Ha=new Int16Array(I),B=new Int32Array(I),G=new Uint8Array(I),Pa=new Uint16Array(I),Qa=new Uint32Array(I),Ia=new Float32Array(I),Ja=new Float64Array(I),B[0]=255,w(255===G[0]&&0===G[3],"Typed arrays 2 must be run on a little-endian system"),s.HEAP=k,s.HEAP8=A,s.HEAP16=Ha,s.HEAP32=B,s.HEAPU8=G,s.HEAPU16=Pa,s.HEAPU32=Qa,s.HEAPF32=Ia,s.HEAPF64=Ja
var Wa=[],Xa=[],Ya=[],Za=[],$a=[],ab=p
s.addOnPreRun=s.Vd=bb,s.addOnInit=s.Sd=function(e){Xa.unshift(e)},s.addOnPreMain=s.Ud=function(e){Ya.unshift(e)},s.addOnExit=s.Rd=function(e){Za.unshift(e)},s.addOnPostRun=s.Td=cb,s.intArrayFromString=J,s.intArrayToString=function(e){for(var r=[],t=0;t<e.length;t++){var i=e[t]
i>255&&(i&=255),r.push(String.fromCharCode(i))}return r.join("")},s.writeStringToMemory=Da,s.writeArrayToMemory=Ea,Math.imul||(Math.imul=function(e,r){var t=65535&e,i=65535&r
return t*i+((e>>>16)*i+t*(r>>>16)<<16)|0}),Math.ie=Math.imul
var L=0,fb={},gb=p,hb=m
s.addRunDependency=ib,s.removeRunDependency=jb,s.preloadedImages={},s.preloadedAudios={},Ra=8,sa=Ra+1312,Xa.push({V:function(){mb()}})
var nb,ob,pb
nb=nb=F([0,0,0,0,0,0,0,0],"i8",E),ob=ob=F([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",E),pb=pb=F([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",E),F([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,115,0,0,0,0,0,0,0,111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,99,0,0,0,0,0,0,0,0,0,0,0,0,0,36,64,0,0,0,0,0,0,89,64,0,0,0,0,0,136,195,64,0,0,0,0,132,215,151,65,0,128,224,55,121,195,65,67,23,110,5,181,181,184,147,70,245,249,63,233,3,79,56,77,50,29,48,249,72,119,130,90,60,191,115,127,221,79,21,117,56,3,0,0,0,0,0,0,63,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,0,0,0,0,111,112,116,105,111,110,32,100,111,101,115,110,39,116,32,116,97,107,101,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,46,42,115,0,117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,115,0,0,0,0,117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,99,0,0,0,0,255,255,255,255,0,0,0,0,97,109,98,105,103,117,111,117,115,32,111,112,116,105,111,110,32,45,45,32,37,46,42,115,0,0,0,0,0,0,0,0,37,115,58,32,0,0,0,0,80,79,83,73,88,76,89,95,67,79,82,82,69,67,84,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,0,37,115,58,32,0,0,0,0,37,115,10,0,0,0,0,0,37,115,10,0,0,0,0,0,105,110,32,117,115,101,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,37,115,58,32,0,0,0,0,37,115,58,32,0,0,0,0,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0,58,32,0,0,0,0,0,0,58,32,0,0,0,0,0,0,115,121,115,116,101,109,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,109,97,120,32,115,121,115,116,101,109,32,98,121,116,101,115,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,0,0,0,0,176,2,0,0,6,0,0,0,10,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,2,0,0,6,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,116,57,101,120,99,101,112,116,105,111,110,0,0,0,0,83,116,57,98,97,100,95,97,108,108,111,99,0,0,0,0,83,116,50,48,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0,0,0,0,0,0,0,0,0,104,2,0,0,0,0,0,0,120,2,0,0,168,2,0,0,0,0,0,0,0,0,0,0,136,2,0,0,176,2,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",Na,8)
var qb=xa(F(12,"i8",E),8)
w(0==qb%8)
var rb=0
s._memcpy=sb,s._memset=tb
var N={L:1,ca:2,Bd:3,sc:4,I:5,za:6,Jb:7,Sc:8,$:9,Zb:10,ua:11,Ld:11,$a:12,Ya:13,kc:14,ed:15,Wb:16,va:17,Md:18,wa:19,gd:20,aa:21,A:22,Mc:23,Za:24,ld:25,Id:26,lc:27,ad:28,da:29,yd:30,Fc:31,rd:32,hc:33,ab:34,Wc:35,pc:36,$b:37,vc:38,wc:39,xc:40,Ec:41,Jd:42,Qc:43,uc:44,ec:45,Tc:46,Pb:50,Sb:51,Nd:52,Oc:53,Tb:54,Ub:55,fc:56,Vb:57,cd:60,Rc:61,Fd:62,bd:63,Xc:64,Yc:65,xd:66,Uc:67,Mb:68,Cd:69,ac:70,td:71,Hc:74,yc:75,ic:76,Rb:77,mc:79,md:80,Qb:81,wd:82,zc:83,Ac:84,Dc:85,Cc:86,Bc:87,dd:88,Nc:89,ya:90,Ic:91,ba:92,nd:95,qd:96,dc:104,Pc:105,Nb:106,vd:107,jd:108,Zc:109,zd:110,cc:111,Kb:112,bc:113,Lc:114,Jc:115,Gd:116,nc:117,oc:118,rc:119,Ob:120,gc:121,Gc:122,ud:123,Ad:124,Lb:125,Kc:126,tc:127,fd:128,Hd:129,sd:130,Kd:131,jc:132,Dd:133,kd:134,Vc:135,$c:136,Yb:137,qc:138,od:139,Xb:140,hd:141,pd:142,Ed:143},ub={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"No message of desired type",36:"Identifier removed",37:"Channel number out of range",38:"Level 2 not synchronized",39:"Level 3 halted",40:"Level 3 reset",41:"Link number out of range",42:"Protocol driver not attached",43:"No CSI structure available",44:"Level 2 halted",45:"Deadlock condition",46:"No record locks available",50:"Invalid exchange",51:"Invalid request descriptor",52:"Exchange full",53:"No anode",54:"Invalid request code",55:"Invalid slot",56:"File locking deadlock error",57:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",74:"Multihop attempted",75:"Inode is remote (not really error)",76:"Cross mount point (not really error)",77:"Trying to read unreadable message",79:"Inappropriate file type or format",80:"Given log. name not unique",81:"f.d. invalid for this operation",82:"Remote address changed",83:"Can    access a needed shared lib",84:"Accessing a corrupted shared lib",85:".lib section in a.out corrupted",86:"Attempting to link in too many libs",87:"Attempting to exec a shared library",88:"Function not implemented",89:"No more files",90:"Directory not empty",91:"File or path name too long",92:"Too many symbolic links",95:"Operation not supported on transport endpoint",96:"Protocol family not supported",104:"Connection reset by peer",105:"No buffer space available",106:"Address family not supported by protocol family",107:"Protocol wrong type for socket",108:"Socket operation on non-socket",109:"Protocol not available",110:"Can't send after socket shutdown",111:"Connection refused",112:"Address already in use",113:"Connection aborted",114:"Network is unreachable",115:"Network interface is not configured",116:"Connection timed out",117:"Host is down",118:"Host is unreachable",119:"Connection already in progress",120:"Socket already connected",121:"Destination address required",122:"Message too long",123:"Unknown protocol",124:"Socket type not supported",125:"Address not available",126:"ENETRESET",127:"Socket is already connected",128:"Socket is not connected",129:"TOOMANYREFS",130:"EPROCLIM",131:"EUSERS",132:"EDQUOT",133:"ESTALE",134:"Not supported",135:"No medium (in tape drive)",136:"No such host or network path",137:"Filename exists with different case",138:"EILSEQ",139:"Value too large for defined data type",140:"Operation canceled",141:"State not recoverable",142:"Previous owner died",143:"Streams pipe error"},Lb=[],Ob={open:function(e){Pb||(Pb=new pa)
var r=Lb[e.d.X]
r||g(new Q(N.wa)),e.q=r,e.seekable=p},close:function(e){e.q.H.length&&e.q.O.W(e.q,10)},Q:function(e,r,t,i){(!e.q||!e.q.O.Na)&&g(new Q(N.za))
for(var n=0,a=0;i>a;a++){var o
try{o=e.q.O.Na(e.q)}catch(s){g(new Q(N.I))}if(o===k&&0===n&&g(new Q(N.ua)),o===m||o===k)break
n++,r[t+a]=o}return n&&(e.d.timestamp=Date.now()),n},write:function(e,r,t,i){(!e.q||!e.q.O.W)&&g(new Q(N.za))
for(var n=0;i>n;n++)try{e.q.O.W(e.q,r[t+n])}catch(a){g(new Q(N.I))}return i&&(e.d.timestamp=Date.now()),n}},Pb,T={z:function(){return T.ka(m,"/",16895,0)},ka:function(e,r,t,i){return(24576===(61440&t)||4096===(61440&t))&&g(new Q(N.L)),t=Qb(e,r,t,i),t.l=T.l,16384===(61440&t.mode)?(t.e=T.e,t.g={}):32768===(61440&t.mode)?(t.e=T.e,t.g=[]):40960===(61440&t.mode)?t.e=T.e:8192===(61440&t.mode)&&(t.e=Rb),t.timestamp=Date.now(),e&&(e.g[r]=t),t},l:{ge:function(e){var r={}
return r.ce=8192===(61440&e.mode)?e.id:1,r.je=e.id,r.mode=e.mode,r.pe=1,r.uid=0,r.he=0,r.X=e.X,r.size=16384===(61440&e.mode)?4096:32768===(61440&e.mode)?e.g.length:40960===(61440&e.mode)?e.link.length:0,r.Yd=new Date(e.timestamp),r.oe=new Date(e.timestamp),r.ae=new Date(e.timestamp),r.ib=4096,r.Zd=Math.ceil(r.size/r.ib),r},Y:function(e,r){if(r.mode!==k&&(e.mode=r.mode),r.timestamp!==k&&(e.timestamp=r.timestamp),r.size!==k){var t=e.g
if(r.size<t.length)t.length=r.size
else for(;r.size>t.length;)t.push(0)}},tb:function(){g(new Q(N.ca))},Ta:function(e,r,t,i){return T.ka(e,r,t,i)},rename:function(e,r,t){if(16384===(61440&e.mode)){var i
try{i=Sb(r,t)}catch(n){}if(i)for(var a in i.g)g(new Q(N.ya))}delete e.parent.g[e.name],e.name=t,r.g[t]=e},ze:function(e,r){delete e.g[r]},ve:function(e,r){var t,i=Sb(e,r)
for(t in i.g)g(new Q(N.ya))
delete e.g[r]},Wa:function(e,r,t){return e=T.ka(e,r,41471,0),e.link=t,e},Va:function(e){return 40960!==(61440&e.mode)&&g(new Q(N.A)),e.link}},e:{open:function(e){if(16384===(61440&e.d.mode)){var r,t=[".",".."]
for(r in e.d.g)e.d.g.hasOwnProperty(r)&&t.push(r)
e.lb=t}},Q:function(e,r,t,i,n){if(e=e.d.g,i=Math.min(e.length-n,i),e.subarray)r.set(e.subarray(n,n+i),t)
else for(var a=0;i>a;a++)r[t+a]=e[n+a]
return i},write:function(e,r,t,i,n){for(var a=e.d.g;a.length<n;)a.push(0)
for(var o=0;i>o;o++)a[n+o]=r[t+o]
return e.d.timestamp=Date.now(),i},na:function(e,r,t){return 1===t?r+=e.position:2===t&&32768===(61440&e.d.mode)&&(r+=e.d.g.length),0>r&&g(new Q(N.A)),e.Gb=[],e.position=r},ue:function(e){return e.lb},Wd:function(e,r,t){for(e=e.d.g,r+=t;r>e.length;)e.push(0)},ne:function(e,r,t,i,n,a,o){return 32768!==(61440&e.d.mode)&&g(new Q(N.wa)),e=e.d.g,2&o?((n>0||n+i<e.length)&&(e=e.subarray?e.subarray(n,n+i):Array.prototype.slice.call(e,n,n+i)),n=l,(i=Oa(i))||g(new Q(N.$a)),r.set(e,i)):(w(e.buffer===r||e.buffer===r.buffer),n=p,i=e.byteOffset),{te:i,Xd:n}}}},Tb=F(1,"i32*",E),Ub=F(1,"i32*",E)
nb=F(1,"i32*",E)
var Vb=m,Nb=[m],R=[m],Wb=1,Xb=[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],Yb=l,Fb={r:0,rs:8192,"r+":2,w:1537,wx:3585,xw:3585,"w+":1538,"wx+":3586,"xw+":3586,a:521,ax:2569,xa:2569,"a+":522,"ax+":2570,"xa+":2570},Rb={open:function(e){e.e=Nb[e.d.X].e,e.e.open&&e.e.open(e)},na:function(){g(new Q(N.da))}},bc
s._strlen=ic
var vc=F(1,"i32*",E),W={},Cc=p,Dc=p,Ec=p,Fc=p,Gc=k,Hc=k,Jc=[],Nc,Oc,Pc,Qc,rb=ra(4)
B[rb>>2]=0
var Vb=Qb(m,"/",16895,0),Rc=T,Sc={type:Rc,se:{},Ua:"/",root:m},Tc
Tc=O("/",{N:p})
var Uc=Rc.z(Sc)
Uc.z=Sc,Sc.root=Uc,Tc&&(Tc.d.z=Sc,Tc.d.ub=l,Vb=Sc.root),zb("/tmp",511),zb("/dev",511),Nb[259]={e:{Q:function(){return 0},write:function(){return 0}}},Ab("/dev/null",438,259),Mb(1280,{Na:function(e){if(!e.input.length){var r=m
if(ca){if(process.Eb.be)return
r=process.Eb.Q()}else"undefined"!=typeof window&&"function"==typeof window.prompt?(r=window.prompt("Input: "),r!==m&&(r+="\n")):"function"==typeof readline&&(r=readline(),r!==m&&(r+="\n"))
if(!r)return m
e.input=J(r,l)}return e.input.shift()},W:function(e,r){r===m||10===r?(s.print(e.H.join("")),e.H=[]):e.H.push(Pb.oa(r))}}),Mb(1536,{W:function(e,r){r===m||10===r?(s.printErr(e.H.join("")),e.H=[]):e.H.push(Pb.oa(r))}}),Ab("/dev/tty",438,1280),Ab("/dev/tty1",438,1536),zb("/dev/shm",511),zb("/dev/shm/tmp",511),Xa.unshift({V:function(){if(!s.noFSInit&&!bc){w(!bc,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),bc=l,s.stdin=s.stdin,s.stdout=s.stdout,s.stderr=s.stderr,s.stdin?ec("/dev","stdin",s.stdin):Bb("/dev/tty","/dev/stdin"),s.stdout?ec("/dev","stdout",m,s.stdout):Bb("/dev/tty","/dev/stdout"),s.stderr?ec("/dev","stderr",m,s.stderr):Bb("/dev/tty1","/dev/stderr")
var e=Db("/dev/stdin","r")
B[Tb>>2]=e.s,w(1===e.s,"invalid handle for stdin ("+e.s+")"),e=Db("/dev/stdout","w"),B[Ub>>2]=e.s,w(2===e.s,"invalid handle for stdout ("+e.s+")"),e=Db("/dev/stderr","w"),B[nb>>2]=e.s,w(3===e.s,"invalid handle for stderr ("+e.s+")")}}}),Ya.push({V:function(){Yb=p}}),Za.push({V:function(){bc=p
for(var e=0;e<R.length;e++){var r=R[e]
r&&Hb(r)}}}),s.FS_createFolder=function(e,r,t,i){return e=S("string"==typeof e?e:ac(e),r),zb(e,cc(t,i))},s.FS_createPath=function(e,r){for(var e="string"==typeof e?e:ac(e),t=r.split("/").reverse();t.length;){var i=t.pop()
if(i){var n=S(e,i)
try{zb(n,511)}catch(a){}e=n}}return n},s.FS_createDataFile=dc,s.FS_createPreloadedFile=function(e,r,t,i,n,a,o,f){function c(){Ec=document.pointerLockElement===b||document.mozPointerLockElement===b||document.webkitPointerLockElement===b}function u(t){function c(t){f||dc(e,r,t,i,n),a&&a(),jb("cp "+d)}var u=p
s.preloadPlugins.forEach(function(e){!u&&e.canHandle(d)&&(e.handle(t,d,c,function(){o&&o(),jb("cp "+d)}),u=l)}),u||c(t)}if(s.preloadPlugins||(s.preloadPlugins=[]),!Nc&&!ea){Nc=l
try{new Blob,Oc=l}catch(h){Oc=p,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Pc="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:Oc?m:console.log("warning: no BlobBuilder"),Qc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:console.log("warning: cannot create object URLs"),s.preloadPlugins.push({canHandle:function(e){return!s.re&&/\.(jpg|jpeg|png|bmp)$/i.test(e)},handle:function(e,r,t,i){var n=m
if(Oc)try{n=new Blob([e],{type:Ic(r)}),n.size!==e.length&&(n=new Blob([new Uint8Array(e).buffer],{type:Ic(r)}))}catch(a){var o="Blob constructor present but fails: "+a+"; falling back to blob builder"
oa||(oa={}),oa[o]||(oa[o]=1,s.P(o))}n||(n=new Pc,n.append(new Uint8Array(e).buffer),n=n.getBlob())
var f=Qc.createObjectURL(n),c=new Image
c.onload=function(){w(c.complete,"Image "+r+" could not be decoded")
var i=document.createElement("canvas")
i.width=c.width,i.height=c.height,i.getContext("2d").drawImage(c,0,0),s.preloadedImages[r]=i,Qc.revokeObjectURL(f),t&&t(e)},c.onerror=function(){console.log("Image "+f+" could not be decoded"),i&&i()},c.src=f}}),s.preloadPlugins.push({canHandle:function(e){return!s.qe&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,r,t,i){function n(i){o||(o=l,s.preloadedAudios[r]=i,t&&t(e))}function a(){o||(o=l,s.preloadedAudios[r]=new Audio,i&&i())}var o=p
if(!Oc)return a()
try{var f=new Blob([e],{type:Ic(r)})}catch(c){return a()}var f=Qc.createObjectURL(f),u=new Audio
u.addEventListener("canplaythrough",function(){n(u)},p),u.onerror=function(){if(!o){console.log("warning: browser could not fully decode audio "+r+", trying slower base64 approach")
for(var t="",i=0,a=0,s=0;s<e.length;s++)for(i=i<<8|e[s],a+=8;a>=6;)var f=i>>a-6&63,a=a-6,t=t+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f]
2==a?(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3&i)<<4],t+="=="):4==a&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15&i)<<2],t+="="),u.src="data:audio/x-"+r.substr(-3)+";base64,"+t,n(u)}},u.src=f,setTimeout(function(){za||n(u)},1e4)}})
var b=s.canvas
b.qa=b.requestPointerLock||b.mozRequestPointerLock||b.webkitRequestPointerLock,b.La=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||aa(),b.La=b.La.bind(document),document.addEventListener("pointerlockchange",c,p),document.addEventListener("mozpointerlockchange",c,p),document.addEventListener("webkitpointerlockchange",c,p),s.elementPointerLock&&b.addEventListener("click",function(e){!Ec&&b.qa&&(b.qa(),e.preventDefault())},p)}var d,v=S.apply(m,[e,r])
if("/"==v[0]&&(v=v.substr(1)),d=v,ib("cp "+d),"string"==typeof t){var k=o,_=function(){k?k():g('Loading data file "'+t+'" failed.')},y=new XMLHttpRequest
y.open("GET",t,l),y.responseType="arraybuffer",y.onload=function(){if(200==y.status||0==y.status&&y.response){var e=y.response
w(e,'Loading data file "'+t+'" failed (no arrayBuffer).'),e=new Uint8Array(e),u(e),jb("al "+t)}else _()},y.onerror=_,y.send(m),ib("al "+t)}else u(t)},s.FS_createLazyFile=function(e,r,t,i,n){var a,o
"undefined"!=typeof XMLHttpRequest?(ea||g("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"),a=function(){this.ma=p,this.T=[]},a.prototype.get=function(e){if(!(e>this.length-1||0>e)){var r=e%this.S
return this.pb(Math.floor(e/this.S))[r]}},a.prototype.Cb=function(e){this.pb=e},a.prototype.Fa=function(){var e=new XMLHttpRequest
e.open("HEAD",t,p),e.send(m),200<=e.status&&300>e.status||304===e.status||g(Error("Couldn't load "+t+". Status: "+e.status))
var r,i=+e.getResponseHeader("Content-length"),n=1048576;(r=e.getResponseHeader("Accept-Ranges"))&&"bytes"===r||(n=i)
var a=this
a.Cb(function(e){var r=e*n,o=(e+1)*n-1,o=Math.min(o,i-1)
if(void 0===a.T[e]){var s=a.T
r>o&&g(Error("invalid range ("+r+", "+o+") or no bytes requested!")),o>i-1&&g(Error("only "+i+" bytes available! programmer error!"))
var f=new XMLHttpRequest
f.open("GET",t,p),i!==n&&f.setRequestHeader("Range","bytes="+r+"-"+o),"undefined"!=typeof Uint8Array&&(f.responseType="arraybuffer"),f.overrideMimeType&&f.overrideMimeType("text/plain; charset=x-user-defined"),f.send(m),200<=f.status&&300>f.status||304===f.status||g(Error("Couldn't load "+t+". Status: "+f.status)),r=f.response!==k?new Uint8Array(f.response||[]):J(f.responseText||"",l),s[e]=r}return void 0===a.T[e]&&g(Error("doXHR failed!")),a.T[e]}),this.gb=i,this.fb=n,this.ma=l},a=new a,Object.defineProperty(a,"length",{get:function(){return this.ma||this.Fa(),this.gb}}),Object.defineProperty(a,"chunkSize",{get:function(){return this.ma||this.Fa(),this.fb}}),o=k):(o=t,a=k)
var f,e=S("string"==typeof e?e:ac(e),r)
f=yb(e,cc(i,n)),a?f.g=a:o&&(f.g=m,f.url=o)
var c={}
return Object.keys(f.e).forEach(function(e){var r=f.e[e]
c[e]=function(){var e
if(f.ke||f.le||f.link||f.g)e=l
else{if(e=l,"undefined"!=typeof XMLHttpRequest&&g(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")),s.read)try{f.g=J(s.read(f.url),l)}catch(t){e=p}else g(Error("Cannot load without read() or XMLHttpRequest."))
e||M(N.I)}return e||g(new Q(N.I)),r.apply(m,arguments)}}),c.Q=function(e,r,t,i,n){if(e=e.d.g,i=Math.min(e.length-n,i),e.slice)for(var a=0;i>a;a++)r[t+a]=e[n+a]
else for(a=0;i>a;a++)r[t+a]=e.get(n+a)
return i},f.e=c,f},s.FS_createLink=function(e,r,t){return e=S("string"==typeof e?e:ac(e),r),Bb(t,e)},s.FS_createDevice=ec,U.m=F(12,"void*",E),wc(W),Bc.J=F([0],"i8",E),s.requestFullScreen=function(e,r){function t(){Dc=p,(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===i?(i.Ga=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,i.Ga=i.Ga.bind(document),Gc&&i.qa(),Dc=l,Hc&&Lc()):Hc&&Mc(),s.onFullScreen&&s.onFullScreen(Dc)}Gc=e,Hc=r,void 0===Gc&&(Gc=l),void 0===Hc&&(Hc=p)
var i=s.canvas
Fc||(Fc=l,document.addEventListener("fullscreenchange",t,p),document.addEventListener("mozfullscreenchange",t,p),document.addEventListener("webkitfullscreenchange",t,p)),i.Ab=i.requestFullScreen||i.mozRequestFullScreen||(i.webkitRequestFullScreen?function(){i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:m),i.Ab()},s.requestAnimationFrame=function(e){window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout),window.requestAnimationFrame(e)},s.pauseMainLoop=aa(),s.resumeMainLoop=function(){Cc&&(Cc=p,m())},s.getUserMedia=function(){window.Ma||(window.Ma=navigator.getUserMedia||navigator.mozGetUserMedia),window.Ma(k)},Sa=u=xa(sa),Ta=Sa+5242880,Ua=z=xa(Ta),w(va>Ua)
var Vc=F([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",3),Wc=F([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",3),Xc=Math.min,V=function(e,r,t){"use asm"
var i=new e.Int8Array(t)
var n=new e.Int16Array(t)
var a=new e.Int32Array(t)
var o=new e.Uint8Array(t)
var s=new e.Uint16Array(t)
var f=new e.Uint32Array(t)
var c=new e.Float32Array(t)
var u=new e.Float64Array(t)
var l=r.STACKTOP|0
var h=r.STACK_MAX|0
var b=r.tempDoublePtr|0
var d=r.ABORT|0
var p=r.cttz_i8|0
var v=r.ctlz_i8|0
var w=r._stderr|0
var m=r.__ZTVN10__cxxabiv120__si_class_type_infoE|0
var k=r.__ZTVN10__cxxabiv117__class_type_infoE|0
var g=r.___progname|0
var _=+r.NaN
var y=+r.Infinity
var A=0
var E=0
var M=0
var N=0
var S=0,I=0,R=0,T=0,C=0.0,x=0,q=0,L=0,Y=0.0
var O=0
var B=0
var F=0
var U=0
var P=0
var z=0
var j=0
var V=0
var D=0
var X=0
var Z=e.Math.floor
var Q=e.Math.abs
var H=e.Math.sqrt
var G=e.Math.pow
var J=e.Math.cos
var W=e.Math.sin
var $=e.Math.tan
var K=e.Math.acos
var ee=e.Math.asin
var re=e.Math.atan
var te=e.Math.atan2
var ie=e.Math.exp
var ne=e.Math.log
var ae=e.Math.ceil
var oe=e.Math.imul
var se=r.abort
var fe=r.assert
var ce=r.asmPrintInt
var ue=r.asmPrintFloat
var le=r.min
var he=r.invoke_vi
var be=r.invoke_vii
var de=r.invoke_ii
var pe=r.invoke_viii
var ve=r.invoke_v
var we=r.invoke_iii
var me=r._strncmp
var ke=r._llvm_va_end
var ge=r._sysconf
var _e=r.___cxa_throw
var ye=r._strerror
var Ae=r._abort
var Ee=r._fprintf
var Me=r._llvm_eh_exception
var Ne=r.___cxa_free_exception
var Se=r._fflush
var Ie=r.___buildEnvironment
var Re=r.__reallyNegative
var Te=r._strchr
var Ce=r._fputc
var xe=r.___setErrNo
var qe=r._fwrite
var Le=r._send
var Ye=r._write
var Oe=r._exit
var Be=r.___cxa_find_matching_catch
var Fe=r.___cxa_allocate_exception
var Ue=r._isspace
var Pe=r.__formatString
var ze=r.___resumeException
var je=r._llvm_uadd_with_overflow_i32
var Ve=r.___cxa_does_inherit
var De=r._getenv
var Xe=r._vfprintf
var Ze=r.___cxa_begin_catch
var Qe=r.__ZSt18uncaught_exceptionv
var He=r._pwrite
var Ge=r.___cxa_call_unexpected
var Je=r._sbrk
var We=r._strerror_r
var $e=r.___errno_location
var Ke=r.___gxx_personality_v0
var er=r.___cxa_is_number_type
var rr=r._time
var tr=r.__exit
var ir=r.___cxa_end_catch
function nr(e){e=e|0
var r=0
r=l
l=l+e|0
l=l+7>>3<<3
return r|0}function ar(){return l|0}function or(e){e=e|0
l=e}function sr(e,r){e=e|0
r=r|0
if((A|0)==0){A=e
E=r}}function fr(e){e=e|0
i[b]=i[e]
i[b+1|0]=i[e+1|0]
i[b+2|0]=i[e+2|0]
i[b+3|0]=i[e+3|0]}function cr(e){e=e|0
i[b]=i[e]
i[b+1|0]=i[e+1|0]
i[b+2|0]=i[e+2|0]
i[b+3|0]=i[e+3|0]
i[b+4|0]=i[e+4|0]
i[b+5|0]=i[e+5|0]
i[b+6|0]=i[e+6|0]
i[b+7|0]=i[e+7|0]}function ur(e){e=e|0
O=e}function lr(e){e=e|0
B=e}function hr(e){e=e|0
F=e}function br(e){e=e|0
U=e}function dr(e){e=e|0
P=e}function pr(e){e=e|0
z=e}function vr(e){e=e|0
j=e}function wr(e){e=e|0
V=e}function mr(e){e=e|0
D=e}function kr(e){e=e|0
X=e}function gr(){a[170]=k+8
a[172]=m+8
a[176]=m+8}function _r(e,r,t){e=e|0
r=r|0
t=t|0
var n=0
if((t|0)==0){return}else{n=0}do{i[e+n|0]=i[r+n|0]|0
n=n+1|0}while(n>>>0<t>>>0)
return}function yr(e,r,t){e=e|0
r=r|0
t=t|0
var n=0,a=0
if((t|0)==0){return}else{n=0}do{a=e+n|0
i[a]=i[a]^i[r+n|0]
n=n+1|0}while(n>>>0<t>>>0)
return}function Ar(e){e=e|0
var r=0,t=0,i=0,n=0
r=o[e+1|0]|0
t=o[e+2|0]|0
i=o[e+3|0]|0
n=ti(r<<8|0>>>24|(o[e]|0)|(t<<16|0>>>16)|(i<<24|0>>>8)|(0<<8|0>>>24),0<<8|r>>>24|(0<<16|t>>>16)|(0<<24|i>>>8)|(o[e+4|0]|0)|((o[e+5|0]|0)<<8|0>>>24),0<<16|0>>>16,(o[e+6|0]|0)<<16|0>>>16)|0
i=ti(n,O,0<<24|0>>>8,(o[e+7|0]|0)<<24|0>>>8)|0
return(O=O,i)|0}function Er(e){e=e|0
return(o[e+1|0]|0)<<8|(o[e]|0)|(o[e+2|0]|0)<<16|(o[e+3|0]|0)<<24|0}function Mr(e,r){e=e|0
r=r|0
i[e]=r&255
i[e+1|0]=r>>>8&255
i[e+2|0]=r>>>16&255
i[e+3|0]=r>>>24&255
return}function Nr(e){e=e|0
a[e+36>>2]=0
a[e+32>>2]=0
a[e>>2]=1779033703
a[e+4>>2]=-1150833019
a[e+8>>2]=1013904242
a[e+12>>2]=-1521486534
a[e+16>>2]=1359893119
a[e+20>>2]=-1694144372
a[e+24>>2]=528734635
a[e+28>>2]=1541459225
return}function Sr(e,r,t,i,n,o,s,f,c,u){e=e|0
r=r|0
t=t|0
i=i|0
n=n|0
o=o|0
s=s|0
f=f|0
c=c|0
u=u|0
var l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0
l=hi(f,0,s,0)|0
h=O
b=0
if(h>>>0>b>>>0|h>>>0==b>>>0&l>>>0>1073741823>>>0){a[($e()|0)>>2]=27
d=-1
return d|0}l=ti(n,o,-1,-1)|0
if((l&n|0)!=0|(O&o|0)!=0|(n|0)==0&(o|0)==0){a[($e()|0)>>2]=22
d=-1
return d|0}do{if(!((33554431/(f>>>0)|0)>>>0<s>>>0|s>>>0>16777215)){l=0
if(l>>>0<o>>>0|l>>>0==o>>>0&(33554431/(s>>>0)|0)>>>0<n>>>0){break}l=s<<7
b=Dr(oe(l,f)|0)|0
if((b|0)==0){d=-1
return d|0}h=Dr(s<<8)|0
do{if((h|0)!=0){p=hi(l,0,n,o)|0
v=Dr(p)|0
if((v|0)==0){Xr(h)
break}p=oe(f<<7,s)|0
jr(e,r,t,i,1,0,b,p)
if((f|0)!=0){w=s<<7
m=0
do{Ir(b+(oe(w,m)|0)|0,s,n,o,v,h)
m=m+1|0}while(m>>>0<f>>>0)}jr(e,r,b,p,1,0,c,u)
Xr(v)
Xr(h)
Xr(b)
d=0
return d|0}}while(0)
Xr(b)
d=-1
return d|0}}while(0)
a[($e()|0)>>2]=12
d=-1
return d|0}function Ir(e,r,t,i,n,a){e=e|0
r=r|0
t=t|0
i=i|0
n=n|0
a=a|0
var o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0
o=r<<7
s=a+o|0
_r(a,e,o)
if((t|0)==0&(i|0)==0){_r(e,a,o)
return}f=o
c=0
u=0
l=0
do{h=hi(l,u,f,c)|0
_r(n+h|0,a,o)
Rr(a,s,r)
l=ti(l,u,1,0)|0
u=O}while(u>>>0<i>>>0|u>>>0==i>>>0&l>>>0<t>>>0)
if((t|0)==0&(i|0)==0){_r(e,a,o)
return}l=ti(t,i,-1,-1)|0
u=O
c=o
f=0
h=0
b=0
do{d=Tr(a,r)|0
p=hi(d&l,O&u,c,f)|0
yr(a,n+p|0,o)
Rr(a,s,r)
b=ti(b,h,1,0)|0
h=O}while(h>>>0<i>>>0|h>>>0==i>>>0&b>>>0<t>>>0)
_r(e,a,o)
return}function Rr(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0,a=0,o=0,s=0,f=0,c=0
i=l
l=l+64|0
n=i|0
a=t<<1
_r(n,e+((t<<7)-64)|0,64)
if((a|0)!=0){o=0
do{s=o<<6
yr(n,e+s|0,64)
Cr(n)
_r(r+s|0,n,64)
o=o+1|0}while(o>>>0<a>>>0)}if((t|0)==0){l=i
return}else{f=0}do{_r(e+(f<<6)|0,r+(f<<7)|0,64)
f=f+1|0}while(f>>>0<t>>>0)
if((t|0)==0){l=i
return}else{c=0}do{_r(e+(c+t<<6)|0,r+(c<<7|64)|0,64)
c=c+1|0}while(c>>>0<t>>>0)
l=i
return}function Tr(e,r){e=e|0
r=r|0
var t=0
t=Ar(e+((r<<7)-64)|0)|0
return(O=O,t)|0}function Cr(e){e=e|0
var r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0,F=0,U=0,P=0,z=0,j=0,V=0,D=0,X=0,Z=0,Q=0,H=0,G=0,J=0,W=0,$=0,K=0,ee=0,re=0
r=l
l=l+128|0
t=r|0
i=r+64|0
n=0
do{a[t+(n<<2)>>2]=Er(e+(n<<2)|0)|0
n=n+1|0}while(n>>>0<16)
n=t
o=i
Kt(o|0,n|0,64)|0
n=i|0
o=i+48|0
s=i+16|0
f=i+32|0
c=i+20|0
u=i+4|0
h=i+36|0
b=i+52|0
d=i+40|0
p=i+24|0
v=i+56|0
w=i+8|0
m=i+60|0
k=i+44|0
g=i+12|0
_=i+28|0
y=0
A=a[n>>2]|0
E=a[o>>2]|0
M=a[s>>2]|0
N=a[f>>2]|0
S=a[c>>2]|0
I=a[u>>2]|0
R=a[h>>2]|0
T=a[b>>2]|0
C=a[d>>2]|0
x=a[p>>2]|0
q=a[v>>2]|0
L=a[w>>2]|0
Y=a[m>>2]|0
O=a[k>>2]|0
B=a[g>>2]|0
F=a[_>>2]|0
do{U=E+A|0
P=(U<<7|U>>>25)^M
U=P+A|0
z=(U<<9|U>>>23)^N
U=z+P|0
j=(U<<13|U>>>19)^E
U=j+z|0
V=(U<<18|U>>>14)^A
U=I+S|0
D=(U<<7|U>>>25)^R
U=D+S|0
X=(U<<9|U>>>23)^T
U=X+D|0
Z=(U<<13|U>>>19)^I
U=Z+X|0
Q=(U<<18|U>>>14)^S
U=x+C|0
H=(U<<7|U>>>25)^q
U=H+C|0
G=(U<<9|U>>>23)^L
U=G+H|0
J=(U<<13|U>>>19)^x
U=J+G|0
W=(U<<18|U>>>14)^C
U=O+Y|0
$=(U<<7|U>>>25)^B
U=$+Y|0
K=(U<<9|U>>>23)^F
U=K+$|0
ee=(U<<13|U>>>19)^O
U=ee+K|0
re=(U<<18|U>>>14)^Y
U=$+V|0
I=(U<<7|U>>>25)^Z
Z=I+V|0
L=(Z<<9|Z>>>23)^G
G=L+I|0
B=(G<<13|G>>>19)^$
$=B+L|0
A=($<<18|$>>>14)^V
V=P+Q|0
x=(V<<7|V>>>25)^J
J=x+Q|0
F=(J<<9|J>>>23)^K
K=F+x|0
M=(K<<13|K>>>19)^P
P=M+F|0
S=(P<<18|P>>>14)^Q
Q=D+W|0
O=(Q<<7|Q>>>25)^ee
ee=O+W|0
N=(ee<<9|ee>>>23)^z
z=N+O|0
R=(z<<13|z>>>19)^D
D=R+N|0
C=(D<<18|D>>>14)^W
W=H+re|0
E=(W<<7|W>>>25)^j
j=E+re|0
T=(j<<9|j>>>23)^X
X=T+E|0
q=(X<<13|X>>>19)^H
H=q+T|0
Y=(H<<18|H>>>14)^re
y=y+2|0}while(y>>>0<8)
a[n>>2]=A
a[o>>2]=E
a[s>>2]=M
a[f>>2]=N
a[c>>2]=S
a[u>>2]=I
a[h>>2]=R
a[b>>2]=T
a[d>>2]=C
a[p>>2]=x
a[v>>2]=q
a[w>>2]=L
a[m>>2]=Y
a[k>>2]=O
a[g>>2]=B
a[_>>2]=F
F=t|0
a[F>>2]=(a[F>>2]|0)+(a[i>>2]|0)
F=t+4|0
a[F>>2]=(a[F>>2]|0)+(a[i+4>>2]|0)
F=t+8|0
a[F>>2]=(a[F>>2]|0)+(a[i+8>>2]|0)
F=t+12|0
a[F>>2]=(a[F>>2]|0)+(a[i+12>>2]|0)
F=t+16|0
a[F>>2]=(a[F>>2]|0)+(a[i+16>>2]|0)
F=t+20|0
a[F>>2]=(a[F>>2]|0)+(a[i+20>>2]|0)
F=t+24|0
a[F>>2]=(a[F>>2]|0)+(a[i+24>>2]|0)
F=t+28|0
a[F>>2]=(a[F>>2]|0)+(a[i+28>>2]|0)
F=t+32|0
a[F>>2]=(a[F>>2]|0)+(a[i+32>>2]|0)
F=t+36|0
a[F>>2]=(a[F>>2]|0)+(a[i+36>>2]|0)
F=t+40|0
a[F>>2]=(a[F>>2]|0)+(a[i+40>>2]|0)
F=t+44|0
a[F>>2]=(a[F>>2]|0)+(a[i+44>>2]|0)
F=t+48|0
a[F>>2]=(a[F>>2]|0)+(a[i+48>>2]|0)
F=t+52|0
a[F>>2]=(a[F>>2]|0)+(a[i+52>>2]|0)
F=t+56|0
a[F>>2]=(a[F>>2]|0)+(a[i+56>>2]|0)
F=t+60|0
a[F>>2]=(a[F>>2]|0)+(a[i+60>>2]|0)
i=0
do{Mr(e+(i<<2)|0,a[t+(i<<2)>>2]|0)
i=i+1|0}while(i>>>0<16)
l=r
return}function xr(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0,o=0,s=0,f=0,c=0,u=0
i=e+32|0
n=e+36|0
o=a[n>>2]|0
s=o>>>3&63
f=je(o|0,t<<3|0)|0
a[n>>2]=f
if(O){f=i|0
a[f>>2]=(a[f>>2]|0)+1}f=i|0
a[f>>2]=(a[f>>2]|0)+(t>>>29)
f=64-s|0
i=e+40+s|0
if(f>>>0>t>>>0){Kt(i|0,r|0,t)|0
return}Kt(i|0,r|0,f)|0
i=e|0
s=e+40|0
qr(i,s)
e=r+f|0
r=t-f|0
if(r>>>0>63){f=r
t=e
while(1){qr(i,t)
n=t+64|0
o=f-64|0
if(o>>>0>63){f=o
t=n}else{c=o
u=n
break}}}else{c=r
u=e}Kt(s|0,u|0,c)|0
return}function qr(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0
t=l
l=l+288|0
i=t|0
n=t+256|0
o=i|0
Vr(o,r)
r=16
do{s=a[i+(r-2<<2)>>2]|0
f=a[i+(r-15<<2)>>2]|0
a[i+(r<<2)>>2]=(a[i+(r-16<<2)>>2]|0)+(a[i+(r-7<<2)>>2]|0)+((s>>>19|s<<13)^s>>>10^(s>>>17|s<<15))+((f>>>18|f<<14)^f>>>3^(f>>>7|f<<25))
r=r+1|0}while((r|0)<64)
r=n
f=e
Kt(r|0,f|0,32)|0
f=n+28|0
r=n+16|0
s=a[r>>2]|0
c=n+20|0
u=n+24|0
h=a[u>>2]|0
b=(a[f>>2]|0)+1116352408+(a[o>>2]|0)+((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+((h^a[c>>2])&s^h)|0
h=n|0
s=a[h>>2]|0
o=n+4|0
d=a[o>>2]|0
p=n+8|0
v=a[p>>2]|0
w=n+12|0
a[w>>2]=(a[w>>2]|0)+b
m=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+b+((v|d)&s|v&d)|0
a[f>>2]=m
d=a[w>>2]|0
v=a[c>>2]|0
s=(a[u>>2]|0)+1899447441+(a[i+4>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[u>>2]=b
v=a[p>>2]|0
d=a[r>>2]|0
m=(a[c>>2]|0)-1245643825+(a[i+8>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[c>>2]=s
d=a[o>>2]|0
v=a[w>>2]|0
b=(a[r>>2]|0)-373957723+(a[i+12>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[r>>2]=m
v=a[h>>2]|0
d=a[p>>2]|0
s=(a[w>>2]|0)+961987163+(a[i+16>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[w>>2]=b
d=a[f>>2]|0
v=a[o>>2]|0
m=(a[p>>2]|0)+1508970993+(a[i+20>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[p>>2]=s
v=a[u>>2]|0
d=a[h>>2]|0
b=(a[o>>2]|0)-1841331548+(a[i+24>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[o>>2]=m
d=a[c>>2]|0
v=a[f>>2]|0
s=(a[h>>2]|0)-1424204075+(a[i+28>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[h>>2]=b
v=a[r>>2]|0
d=a[u>>2]|0
m=(a[f>>2]|0)-670586216+(a[i+32>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[f>>2]=s
d=a[w>>2]|0
v=a[c>>2]|0
b=(a[u>>2]|0)+310598401+(a[i+36>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[u>>2]=m
v=a[p>>2]|0
d=a[r>>2]|0
s=(a[c>>2]|0)+607225278+(a[i+40>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[c>>2]=b
d=a[o>>2]|0
v=a[w>>2]|0
m=(a[r>>2]|0)+1426881987+(a[i+44>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[r>>2]=s
v=a[h>>2]|0
d=a[p>>2]|0
b=(a[w>>2]|0)+1925078388+(a[i+48>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[w>>2]=m
d=a[f>>2]|0
v=a[o>>2]|0
s=(a[p>>2]|0)-2132889090+(a[i+52>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[p>>2]=b
v=a[u>>2]|0
d=a[h>>2]|0
m=(a[o>>2]|0)-1680079193+(a[i+56>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[o>>2]=s
d=a[c>>2]|0
v=a[f>>2]|0
b=(a[h>>2]|0)-1046744716+(a[i+60>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[h>>2]=m
v=a[r>>2]|0
d=a[u>>2]|0
s=(a[f>>2]|0)-459576895+(a[i+64>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[f>>2]=b
d=a[w>>2]|0
v=a[c>>2]|0
m=(a[u>>2]|0)-272742522+(a[i+68>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[u>>2]=s
v=a[p>>2]|0
d=a[r>>2]|0
b=(a[c>>2]|0)+264347078+(a[i+72>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[c>>2]=m
d=a[o>>2]|0
v=a[w>>2]|0
s=(a[r>>2]|0)+604807628+(a[i+76>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[r>>2]=b
v=a[h>>2]|0
d=a[p>>2]|0
m=(a[w>>2]|0)+770255983+(a[i+80>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[w>>2]=s
d=a[f>>2]|0
v=a[o>>2]|0
b=(a[p>>2]|0)+1249150122+(a[i+84>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[p>>2]=m
v=a[u>>2]|0
d=a[h>>2]|0
s=(a[o>>2]|0)+1555081692+(a[i+88>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[o>>2]=b
d=a[c>>2]|0
v=a[f>>2]|0
m=(a[h>>2]|0)+1996064986+(a[i+92>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[h>>2]=s
v=a[r>>2]|0
d=a[u>>2]|0
b=(a[f>>2]|0)-1740746414+(a[i+96>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[f>>2]=m
d=a[w>>2]|0
v=a[c>>2]|0
s=(a[u>>2]|0)-1473132947+(a[i+100>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[u>>2]=b
v=a[p>>2]|0
d=a[r>>2]|0
m=(a[c>>2]|0)-1341970488+(a[i+104>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[c>>2]=s
d=a[o>>2]|0
v=a[w>>2]|0
b=(a[r>>2]|0)-1084653625+(a[i+108>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[r>>2]=m
v=a[h>>2]|0
d=a[p>>2]|0
s=(a[w>>2]|0)-958395405+(a[i+112>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[w>>2]=b
d=a[f>>2]|0
v=a[o>>2]|0
m=(a[p>>2]|0)-710438585+(a[i+116>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[p>>2]=s
v=a[u>>2]|0
d=a[h>>2]|0
b=(a[o>>2]|0)+113926993+(a[i+120>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[o>>2]=m
d=a[c>>2]|0
v=a[f>>2]|0
s=(a[h>>2]|0)+338241895+(a[i+124>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[h>>2]=b
v=a[r>>2]|0
d=a[u>>2]|0
m=(a[f>>2]|0)+666307205+(a[i+128>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[f>>2]=s
d=a[w>>2]|0
v=a[c>>2]|0
b=(a[u>>2]|0)+773529912+(a[i+132>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[u>>2]=m
v=a[p>>2]|0
d=a[r>>2]|0
s=(a[c>>2]|0)+1294757372+(a[i+136>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[c>>2]=b
d=a[o>>2]|0
v=a[w>>2]|0
m=(a[r>>2]|0)+1396182291+(a[i+140>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[r>>2]=s
v=a[h>>2]|0
d=a[p>>2]|0
b=(a[w>>2]|0)+1695183700+(a[i+144>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[w>>2]=m
d=a[f>>2]|0
v=a[o>>2]|0
s=(a[p>>2]|0)+1986661051+(a[i+148>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[p>>2]=b
v=a[u>>2]|0
d=a[h>>2]|0
m=(a[o>>2]|0)-2117940946+(a[i+152>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[o>>2]=s
d=a[c>>2]|0
v=a[f>>2]|0
b=(a[h>>2]|0)-1838011259+(a[i+156>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[h>>2]=m
v=a[r>>2]|0
d=a[u>>2]|0
s=(a[f>>2]|0)-1564481375+(a[i+160>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[f>>2]=b
d=a[w>>2]|0
v=a[c>>2]|0
m=(a[u>>2]|0)-1474664885+(a[i+164>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[u>>2]=s
v=a[p>>2]|0
d=a[r>>2]|0
b=(a[c>>2]|0)-1035236496+(a[i+168>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[c>>2]=m
d=a[o>>2]|0
v=a[w>>2]|0
s=(a[r>>2]|0)-949202525+(a[i+172>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[r>>2]=b
v=a[h>>2]|0
d=a[p>>2]|0
m=(a[w>>2]|0)-778901479+(a[i+176>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[w>>2]=s
d=a[f>>2]|0
v=a[o>>2]|0
b=(a[p>>2]|0)-694614492+(a[i+180>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[p>>2]=m
v=a[u>>2]|0
d=a[h>>2]|0
s=(a[o>>2]|0)-200395387+(a[i+184>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[o>>2]=b
d=a[c>>2]|0
v=a[f>>2]|0
m=(a[h>>2]|0)+275423344+(a[i+188>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[h>>2]=s
v=a[r>>2]|0
d=a[u>>2]|0
b=(a[f>>2]|0)+430227734+(a[i+192>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[f>>2]=m
d=a[w>>2]|0
v=a[c>>2]|0
s=(a[u>>2]|0)+506948616+(a[i+196>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[u>>2]=b
v=a[p>>2]|0
d=a[r>>2]|0
m=(a[c>>2]|0)+659060556+(a[i+200>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[c>>2]=s
d=a[o>>2]|0
v=a[w>>2]|0
b=(a[r>>2]|0)+883997877+(a[i+204>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[r>>2]=m
v=a[h>>2]|0
d=a[p>>2]|0
s=(a[w>>2]|0)+958139571+(a[i+208>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[w>>2]=b
d=a[f>>2]|0
v=a[o>>2]|0
m=(a[p>>2]|0)+1322822218+(a[i+212>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[p>>2]=s
v=a[u>>2]|0
d=a[h>>2]|0
b=(a[o>>2]|0)+1537002063+(a[i+216>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[o>>2]=m
d=a[c>>2]|0
v=a[f>>2]|0
s=(a[h>>2]|0)+1747873779+(a[i+220>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[u>>2])&d^v)|0
v=a[p>>2]|0
d=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[h>>2]=b
v=a[r>>2]|0
d=a[u>>2]|0
m=(a[f>>2]|0)+1955562222+(a[i+224>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[c>>2])&v^d)|0
d=a[o>>2]|0
v=a[p>>2]|0
a[w>>2]=(a[w>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[f>>2]=s
d=a[w>>2]|0
v=a[c>>2]|0
b=(a[u>>2]|0)+2024104815+(a[i+228>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[r>>2])&d^v)|0
v=a[h>>2]|0
d=a[o>>2]|0
a[p>>2]=(a[p>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((d|v)&s|d&v)|0
a[u>>2]=m
v=a[p>>2]|0
d=a[r>>2]|0
s=(a[c>>2]|0)-2067236844+(a[i+232>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[w>>2])&v^d)|0
d=a[f>>2]|0
v=a[h>>2]|0
a[o>>2]=(a[o>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|d)&m|v&d)|0
a[c>>2]=b
d=a[o>>2]|0
v=a[w>>2]|0
m=(a[r>>2]|0)-1933114872+(a[i+236>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[p>>2])&d^v)|0
v=a[u>>2]|0
d=a[f>>2]|0
a[h>>2]=(a[h>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((d|v)&b|d&v)|0
a[r>>2]=s
v=a[h>>2]|0
d=a[p>>2]|0
b=(a[w>>2]|0)-1866530822+(a[i+240>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[o>>2])&v^d)|0
d=a[c>>2]|0
v=a[u>>2]|0
a[f>>2]=(a[f>>2]|0)+b
m=b+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|d)&s|v&d)|0
a[w>>2]=m
d=a[f>>2]|0
v=a[o>>2]|0
s=(a[p>>2]|0)-1538233109+(a[i+244>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^a[h>>2])&d^v)|0
v=a[r>>2]|0
d=a[c>>2]|0
a[u>>2]=(a[u>>2]|0)+s
b=s+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|v)&m|d&v)|0
a[p>>2]=b
v=a[u>>2]|0
d=a[h>>2]|0
m=(a[o>>2]|0)-1090935817+(a[i+248>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((d^a[f>>2])&v^d)|0
d=a[w>>2]|0
v=a[r>>2]|0
a[c>>2]=(a[c>>2]|0)+m
s=m+((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+((v|d)&b|v&d)|0
a[o>>2]=s
o=a[c>>2]|0
c=a[f>>2]|0
f=(a[h>>2]|0)-965641998+(a[i+252>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((c^a[u>>2])&o^c)|0
c=a[p>>2]|0
p=a[w>>2]|0
a[r>>2]=(a[r>>2]|0)+f
r=f+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|c)&s|p&c)|0
a[h>>2]=r
a[e>>2]=(a[e>>2]|0)+r
r=e+4|0
a[r>>2]=(a[r>>2]|0)+(a[n+4>>2]|0)
r=e+8|0
a[r>>2]=(a[r>>2]|0)+(a[n+8>>2]|0)
r=e+12|0
a[r>>2]=(a[r>>2]|0)+(a[n+12>>2]|0)
r=e+16|0
a[r>>2]=(a[r>>2]|0)+(a[n+16>>2]|0)
r=e+20|0
a[r>>2]=(a[r>>2]|0)+(a[n+20>>2]|0)
r=e+24|0
a[r>>2]=(a[r>>2]|0)+(a[n+24>>2]|0)
r=e+28|0
a[r>>2]=(a[r>>2]|0)+(a[n+28>>2]|0)
l=t
return}function Lr(e,r){e=e|0
r=r|0
i[e+3|0]=r&255
i[e+2|0]=r>>>8&255
i[e+1|0]=r>>>16&255
i[e]=r>>>24&255
return}function Yr(e){e=e|0
return(o[e+2|0]|0)<<8|(o[e+3|0]|0)|(o[e+1|0]|0)<<16|(o[e]|0)<<24|0}function Or(e,r){e=e|0
r=r|0
Br(r)
Fr(e,r|0,32)
ei(r|0,0,104)
return}function Br(e){e=e|0
var r=0,t=0,i=0
r=l
l=l+8|0
t=r|0
Fr(t,e+32|0,8)
i=(a[e+36>>2]|0)>>>3&63
xr(e,720,(i>>>0<56?56:120)-i|0)
xr(e,t,8)
l=r
return}function Fr(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0
i=t>>>2
if((i|0)==0){return}else{n=0}do{Lr(e+(n<<2)|0,a[r+(n<<2)>>2]|0)
n=n+1|0}while(n>>>0<i>>>0)
return}function Ur(e,r,t){e=e|0
r=r|0
t=t|0
var n=0,a=0,o=0,s=0,f=0,c=0,u=0
n=l
l=l+96|0
a=n|0
if(t>>>0>64){o=e|0
Nr(o)
xr(o,r,t)
s=n+64|0
Or(s,o)
f=s
c=32}else{f=r
c=t}t=e|0
Nr(t)
r=a|0
ei(r|0,54,64)
if((c|0)!=0){s=0
do{o=a+s|0
i[o]=i[o]^i[f+s|0]
s=s+1|0}while(s>>>0<c>>>0)}xr(t,r,64)
t=e+104|0
Nr(t)
ei(r|0,92,64)
if((c|0)==0){xr(t,r,64)
l=n
return}else{u=0}do{e=a+u|0
i[e]=i[e]^i[f+u|0]
u=u+1|0}while(u>>>0<c>>>0)
xr(t,r,64)
l=n
return}function Pr(e,r,t){e=e|0
r=r|0
t=t|0
xr(e|0,r,t)
return}function zr(e,r){e=e|0
r=r|0
var t=0,i=0,n=0
t=l
l=l+32|0
i=t|0
Or(i,r|0)
n=r+104|0
xr(n,i,32)
Or(e,n)
l=t
return}function jr(e,r,t,n,a,o,s,f){e=e|0
r=r|0
t=t|0
n=n|0
a=a|0
o=o|0
s=s|0
f=f|0
var c=0,u=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0
c=l
l=l+488|0
u=c|0
h=c+208|0
b=c+424|0
d=c+456|0
Ur(u,e,r)
Pr(u,t,n)
if((f|0)==0){l=c
return}n=c+416|0
t=h
p=u
u=b|0
v=d|0
w=0
m=o>>>0<w>>>0|o>>>0==w>>>0&a>>>0<2>>>0
w=0
k=0
do{w=w+1|0
Lr(n,w)
Kt(t|0,p|0,208)|0
Pr(h,n,4)
zr(u,h)
Kt(v|0,u|0,32)|0
if(!m){g=0
_=2
do{Ur(h,e,r)
Pr(h,u,32)
zr(u,h)
y=0
do{A=d+y|0
i[A]=i[A]^i[b+y|0]
y=y+1|0}while((y|0)<32)
_=ti(_,g,1,0)|0
g=O}while(!(g>>>0>o>>>0|g>>>0==o>>>0&_>>>0>a>>>0))}_=f-k|0
g=_>>>0>32?32:_
_=s+k|0
Kt(_|0,v|0,g)|0
k=w<<5}while(k>>>0<f>>>0)
l=c
return}function Vr(e,r){e=e|0
r=r|0
var t=0
t=0
do{a[e+(t<<2)>>2]=Yr(r+(t<<2)|0)|0
t=t+1|0}while(t>>>0<16)
return}function Dr(e){e=e|0
var r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0,F=0,U=0,P=0,z=0,j=0,V=0,D=0,X=0,Z=0,Q=0,H=0,G=0,J=0,W=0,$=0,K=0,ee=0,re=0,te=0,ie=0,ne=0,ae=0,oe=0,se=0,fe=0,ce=0,ue=0,le=0,he=0,be=0,de=0,pe=0,ve=0,we=0,me=0,ke=0,_e=0,ye=0,Ee=0,Me=0,Ne=0,Se=0,Ie=0,Re=0,Te=0,Ce=0,xe=0,qe=0,Le=0
do{if(e>>>0<245){if(e>>>0<11){r=16}else{r=e+11&-8}t=r>>>3
i=a[208]|0
n=i>>>(t>>>0)
if((n&3|0)!=0){o=(n&1^1)+t|0
s=o<<1
f=872+(s<<2)|0
c=872+(s+2<<2)|0
s=a[c>>2]|0
u=s+8|0
l=a[u>>2]|0
do{if((f|0)==(l|0)){a[208]=i&~(1<<o)}else{if(l>>>0<(a[212]|0)>>>0){Ae()
return 0}h=l+12|0
if((a[h>>2]|0)==(s|0)){a[h>>2]=f
a[c>>2]=l
break}else{Ae()
return 0}}}while(0)
l=o<<3
a[s+4>>2]=l|3
c=s+(l|4)|0
a[c>>2]=a[c>>2]|1
b=u
return b|0}if(r>>>0<=(a[210]|0)>>>0){d=r
break}if((n|0)!=0){c=2<<t
l=n<<t&(c|-c)
c=(l&-l)-1|0
l=c>>>12&16
f=c>>>(l>>>0)
c=f>>>5&8
h=f>>>(c>>>0)
f=h>>>2&4
p=h>>>(f>>>0)
h=p>>>1&2
v=p>>>(h>>>0)
p=v>>>1&1
w=(c|l|f|h|p)+(v>>>(p>>>0))|0
p=w<<1
v=872+(p<<2)|0
h=872+(p+2<<2)|0
p=a[h>>2]|0
f=p+8|0
l=a[f>>2]|0
do{if((v|0)==(l|0)){a[208]=i&~(1<<w)}else{if(l>>>0<(a[212]|0)>>>0){Ae()
return 0}c=l+12|0
if((a[c>>2]|0)==(p|0)){a[c>>2]=v
a[h>>2]=l
break}else{Ae()
return 0}}}while(0)
l=w<<3
h=l-r|0
a[p+4>>2]=r|3
v=p
i=v+r|0
a[v+(r|4)>>2]=h|1
a[v+l>>2]=h
l=a[210]|0
if((l|0)!=0){v=a[213]|0
t=l>>>3
l=t<<1
n=872+(l<<2)|0
u=a[208]|0
s=1<<t
do{if((u&s|0)==0){a[208]=u|s
m=n
k=872+(l+2<<2)|0}else{t=872+(l+2<<2)|0
o=a[t>>2]|0
if(o>>>0>=(a[212]|0)>>>0){m=o
k=t
break}Ae()
return 0}}while(0)
a[k>>2]=v
a[m+12>>2]=v
a[v+8>>2]=m
a[v+12>>2]=n}a[210]=h
a[213]=i
b=f
return b|0}l=a[209]|0
if((l|0)==0){d=r
break}s=(l&-l)-1|0
l=s>>>12&16
u=s>>>(l>>>0)
s=u>>>5&8
p=u>>>(s>>>0)
u=p>>>2&4
w=p>>>(u>>>0)
p=w>>>1&2
t=w>>>(p>>>0)
w=t>>>1&1
o=a[1136+((s|l|u|p|w)+(t>>>(w>>>0))<<2)>>2]|0
w=o
t=o
p=(a[o+4>>2]&-8)-r|0
while(1){o=a[w+16>>2]|0
if((o|0)==0){u=a[w+20>>2]|0
if((u|0)==0){break}else{g=u}}else{g=o}o=(a[g+4>>2]&-8)-r|0
u=o>>>0<p>>>0
w=g
t=u?g:t
p=u?o:p}w=t
f=a[212]|0
if(w>>>0<f>>>0){Ae()
return 0}i=w+r|0
h=i
if(w>>>0>=i>>>0){Ae()
return 0}i=a[t+24>>2]|0
n=a[t+12>>2]|0
do{if((n|0)==(t|0)){v=t+20|0
o=a[v>>2]|0
if((o|0)==0){u=t+16|0
l=a[u>>2]|0
if((l|0)==0){_=0
break}else{y=l
A=u}}else{y=o
A=v}while(1){v=y+20|0
o=a[v>>2]|0
if((o|0)!=0){y=o
A=v
continue}v=y+16|0
o=a[v>>2]|0
if((o|0)==0){break}else{y=o
A=v}}if(A>>>0<f>>>0){Ae()
return 0}else{a[A>>2]=0
_=y
break}}else{v=a[t+8>>2]|0
if(v>>>0<f>>>0){Ae()
return 0}o=v+12|0
if((a[o>>2]|0)!=(t|0)){Ae()
return 0}u=n+8|0
if((a[u>>2]|0)==(t|0)){a[o>>2]=n
a[u>>2]=v
_=n
break}else{Ae()
return 0}}}while(0)
e:do{if((i|0)!=0){n=t+28|0
f=1136+(a[n>>2]<<2)|0
do{if((t|0)==(a[f>>2]|0)){a[f>>2]=_
if((_|0)!=0){break}a[209]=a[209]&~(1<<a[n>>2])
break e}else{if(i>>>0<(a[212]|0)>>>0){Ae()
return 0}v=i+16|0
if((a[v>>2]|0)==(t|0)){a[v>>2]=_}else{a[i+20>>2]=_}if((_|0)==0){break e}}}while(0)
if(_>>>0<(a[212]|0)>>>0){Ae()
return 0}a[_+24>>2]=i
n=a[t+16>>2]|0
do{if((n|0)!=0){if(n>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[_+16>>2]=n
a[n+24>>2]=_
break}}}while(0)
n=a[t+20>>2]|0
if((n|0)==0){break}if(n>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[_+20>>2]=n
a[n+24>>2]=_
break}}}while(0)
if(p>>>0<16){i=p+r|0
a[t+4>>2]=i|3
n=w+(i+4)|0
a[n>>2]=a[n>>2]|1}else{a[t+4>>2]=r|3
a[w+(r|4)>>2]=p|1
a[w+(p+r)>>2]=p
n=a[210]|0
if((n|0)!=0){i=a[213]|0
f=n>>>3
n=f<<1
v=872+(n<<2)|0
u=a[208]|0
o=1<<f
do{if((u&o|0)==0){a[208]=u|o
E=v
M=872+(n+2<<2)|0}else{f=872+(n+2<<2)|0
l=a[f>>2]|0
if(l>>>0>=(a[212]|0)>>>0){E=l
M=f
break}Ae()
return 0}}while(0)
a[M>>2]=i
a[E+12>>2]=i
a[i+8>>2]=E
a[i+12>>2]=v}a[210]=p
a[213]=h}n=t+8|0
if((n|0)==0){d=r
break}else{b=n}return b|0}else{if(e>>>0>4294967231){d=-1
break}n=e+11|0
o=n&-8
u=a[209]|0
if((u|0)==0){d=o
break}w=-o|0
f=n>>>8
do{if((f|0)==0){N=0}else{if(o>>>0>16777215){N=31
break}n=(f+1048320|0)>>>16&8
l=f<<n
s=(l+520192|0)>>>16&4
c=l<<s
l=(c+245760|0)>>>16&2
S=14-(s|n|l)+(c<<l>>>15)|0
N=o>>>((S+7|0)>>>0)&1|S<<1}}while(0)
f=a[1136+(N<<2)>>2]|0
e:do{if((f|0)==0){I=0
R=w
T=0}else{if((N|0)==31){C=0}else{C=25-(N>>>1)|0}t=0
h=w
p=f
v=o<<C
i=0
while(1){S=a[p+4>>2]&-8
l=S-o|0
if(l>>>0<h>>>0){if((S|0)==(o|0)){I=p
R=l
T=p
break e}else{x=p
q=l}}else{x=t
q=h}l=a[p+20>>2]|0
S=a[p+16+(v>>>31<<2)>>2]|0
c=(l|0)==0|(l|0)==(S|0)?i:l
if((S|0)==0){I=x
R=q
T=c
break}else{t=x
h=q
p=S
v=v<<1
i=c}}}}while(0)
if((T|0)==0&(I|0)==0){f=2<<N
w=u&(f|-f)
if((w|0)==0){d=o
break}f=(w&-w)-1|0
w=f>>>12&16
i=f>>>(w>>>0)
f=i>>>5&8
v=i>>>(f>>>0)
i=v>>>2&4
p=v>>>(i>>>0)
v=p>>>1&2
h=p>>>(v>>>0)
p=h>>>1&1
L=a[1136+((f|w|i|v|p)+(h>>>(p>>>0))<<2)>>2]|0}else{L=T}if((L|0)==0){Y=R
O=I}else{p=L
h=R
v=I
while(1){i=(a[p+4>>2]&-8)-o|0
w=i>>>0<h>>>0
f=w?i:h
i=w?p:v
w=a[p+16>>2]|0
if((w|0)!=0){p=w
h=f
v=i
continue}w=a[p+20>>2]|0
if((w|0)==0){Y=f
O=i
break}else{p=w
h=f
v=i}}}if((O|0)==0){d=o
break}if(Y>>>0>=((a[210]|0)-o|0)>>>0){d=o
break}v=O
h=a[212]|0
if(v>>>0<h>>>0){Ae()
return 0}p=v+o|0
u=p
if(v>>>0>=p>>>0){Ae()
return 0}i=a[O+24>>2]|0
f=a[O+12>>2]|0
do{if((f|0)==(O|0)){w=O+20|0
t=a[w>>2]|0
if((t|0)==0){c=O+16|0
S=a[c>>2]|0
if((S|0)==0){B=0
break}else{F=S
U=c}}else{F=t
U=w}while(1){w=F+20|0
t=a[w>>2]|0
if((t|0)!=0){F=t
U=w
continue}w=F+16|0
t=a[w>>2]|0
if((t|0)==0){break}else{F=t
U=w}}if(U>>>0<h>>>0){Ae()
return 0}else{a[U>>2]=0
B=F
break}}else{w=a[O+8>>2]|0
if(w>>>0<h>>>0){Ae()
return 0}t=w+12|0
if((a[t>>2]|0)!=(O|0)){Ae()
return 0}c=f+8|0
if((a[c>>2]|0)==(O|0)){a[t>>2]=f
a[c>>2]=w
B=f
break}else{Ae()
return 0}}}while(0)
e:do{if((i|0)!=0){f=O+28|0
h=1136+(a[f>>2]<<2)|0
do{if((O|0)==(a[h>>2]|0)){a[h>>2]=B
if((B|0)!=0){break}a[209]=a[209]&~(1<<a[f>>2])
break e}else{if(i>>>0<(a[212]|0)>>>0){Ae()
return 0}w=i+16|0
if((a[w>>2]|0)==(O|0)){a[w>>2]=B}else{a[i+20>>2]=B}if((B|0)==0){break e}}}while(0)
if(B>>>0<(a[212]|0)>>>0){Ae()
return 0}a[B+24>>2]=i
f=a[O+16>>2]|0
do{if((f|0)!=0){if(f>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[B+16>>2]=f
a[f+24>>2]=B
break}}}while(0)
f=a[O+20>>2]|0
if((f|0)==0){break}if(f>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[B+20>>2]=f
a[f+24>>2]=B
break}}}while(0)
do{if(Y>>>0<16){i=Y+o|0
a[O+4>>2]=i|3
f=v+(i+4)|0
a[f>>2]=a[f>>2]|1}else{a[O+4>>2]=o|3
a[v+(o|4)>>2]=Y|1
a[v+(Y+o)>>2]=Y
f=Y>>>3
if(Y>>>0<256){i=f<<1
h=872+(i<<2)|0
w=a[208]|0
c=1<<f
do{if((w&c|0)==0){a[208]=w|c
P=h
z=872+(i+2<<2)|0}else{f=872+(i+2<<2)|0
t=a[f>>2]|0
if(t>>>0>=(a[212]|0)>>>0){P=t
z=f
break}Ae()
return 0}}while(0)
a[z>>2]=u
a[P+12>>2]=u
a[v+(o+8)>>2]=P
a[v+(o+12)>>2]=h
break}i=p
c=Y>>>8
do{if((c|0)==0){j=0}else{if(Y>>>0>16777215){j=31
break}w=(c+1048320|0)>>>16&8
f=c<<w
t=(f+520192|0)>>>16&4
S=f<<t
f=(S+245760|0)>>>16&2
l=14-(t|w|f)+(S<<f>>>15)|0
j=Y>>>((l+7|0)>>>0)&1|l<<1}}while(0)
c=1136+(j<<2)|0
a[v+(o+28)>>2]=j
a[v+(o+20)>>2]=0
a[v+(o+16)>>2]=0
h=a[209]|0
l=1<<j
if((h&l|0)==0){a[209]=h|l
a[c>>2]=i
a[v+(o+24)>>2]=c
a[v+(o+12)>>2]=i
a[v+(o+8)>>2]=i
break}if((j|0)==31){V=0}else{V=25-(j>>>1)|0}l=Y<<V
h=a[c>>2]|0
while(1){if((a[h+4>>2]&-8|0)==(Y|0)){break}D=h+16+(l>>>31<<2)|0
c=a[D>>2]|0
if((c|0)==0){X=262
break}else{l=l<<1
h=c}}if((X|0)==262){if(D>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[D>>2]=i
a[v+(o+24)>>2]=h
a[v+(o+12)>>2]=i
a[v+(o+8)>>2]=i
break}}l=h+8|0
c=a[l>>2]|0
f=a[212]|0
if(h>>>0<f>>>0){Ae()
return 0}if(c>>>0<f>>>0){Ae()
return 0}else{a[c+12>>2]=i
a[l>>2]=i
a[v+(o+8)>>2]=c
a[v+(o+12)>>2]=h
a[v+(o+24)>>2]=0
break}}}while(0)
v=O+8|0
if((v|0)==0){d=o
break}else{b=v}return b|0}}while(0)
O=a[210]|0
if(d>>>0<=O>>>0){D=O-d|0
Y=a[213]|0
if(D>>>0>15){V=Y
a[213]=V+d
a[210]=D
a[V+(d+4)>>2]=D|1
a[V+O>>2]=D
a[Y+4>>2]=d|3}else{a[210]=0
a[213]=0
a[Y+4>>2]=O|3
D=Y+(O+4)|0
a[D>>2]=a[D>>2]|1}b=Y+8|0
return b|0}Y=a[211]|0
if(d>>>0<Y>>>0){D=Y-d|0
a[211]=D
Y=a[214]|0
O=Y
a[214]=O+d
a[O+(d+4)>>2]=D|1
a[Y+4>>2]=d|3
b=Y+8|0
return b|0}do{if((a[200]|0)==0){Y=ge(8)|0
if((Y-1&Y|0)==0){a[202]=Y
a[201]=Y
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()
return 0}}}while(0)
Y=d+48|0
D=a[202]|0
O=d+47|0
V=D+O|0
j=-D|0
D=V&j
if(D>>>0<=d>>>0){b=0
return b|0}P=a[318]|0
do{if((P|0)!=0){z=a[316]|0
B=z+D|0
if(B>>>0<=z>>>0|B>>>0>P>>>0){b=0}else{break}return b|0}}while(0)
e:do{if((a[319]&4|0)==0){P=a[214]|0
r:do{if((P|0)==0){X=292}else{B=P
z=1280
while(1){Z=z|0
F=a[Z>>2]|0
if(F>>>0<=B>>>0){Q=z+4|0
if((F+(a[Q>>2]|0)|0)>>>0>B>>>0){break}}F=a[z+8>>2]|0
if((F|0)==0){X=292
break r}else{z=F}}if((z|0)==0){X=292
break}B=V-(a[211]|0)&j
if(B>>>0>=2147483647){H=0
break}h=Je(B|0)|0
i=(h|0)==((a[Z>>2]|0)+(a[Q>>2]|0)|0)
G=i?h:-1
J=i?B:0
W=h
$=B
X=301}}while(0)
do{if((X|0)==292){P=Je(0)|0
if((P|0)==-1){H=0
break}o=P
B=a[201]|0
h=B-1|0
if((h&o|0)==0){K=D}else{K=D-o+(h+o&-B)|0}B=a[316]|0
o=B+K|0
if(!(K>>>0>d>>>0&K>>>0<2147483647)){H=0
break}h=a[318]|0
if((h|0)!=0){if(o>>>0<=B>>>0|o>>>0>h>>>0){H=0
break}}h=Je(K|0)|0
o=(h|0)==(P|0)
G=o?P:-1
J=o?K:0
W=h
$=K
X=301}}while(0)
r:do{if((X|0)==301){h=-$|0
if((G|0)!=-1){ee=J
re=G
X=312
break e}do{if((W|0)!=-1&$>>>0<2147483647&$>>>0<Y>>>0){o=a[202]|0
P=O-$+o&-o
if(P>>>0>=2147483647){te=$
break}if((Je(P|0)|0)==-1){Je(h|0)|0
H=J
break r}else{te=P+$|0
break}}else{te=$}}while(0)
if((W|0)==-1){H=J}else{ee=te
re=W
X=312
break e}}}while(0)
a[319]=a[319]|4
ie=H
X=309}else{ie=0
X=309}}while(0)
do{if((X|0)==309){if(D>>>0>=2147483647){break}H=Je(D|0)|0
W=Je(0)|0
if(!((W|0)!=-1&(H|0)!=-1&H>>>0<W>>>0)){break}te=W-H|0
W=te>>>0>(d+40|0)>>>0
J=W?H:-1
if((J|0)!=-1){ee=W?te:ie
re=J
X=312}}}while(0)
do{if((X|0)==312){ie=(a[316]|0)+ee|0
a[316]=ie
if(ie>>>0>(a[317]|0)>>>0){a[317]=ie}ie=a[214]|0
e:do{if((ie|0)==0){D=a[212]|0
if((D|0)==0|re>>>0<D>>>0){a[212]=re}a[320]=re
a[321]=ee
a[323]=0
a[217]=a[200]
a[216]=-1
D=0
do{J=D<<1
te=872+(J<<2)|0
a[872+(J+3<<2)>>2]=te
a[872+(J+2<<2)>>2]=te
D=D+1|0}while(D>>>0<32)
D=re+8|0
if((D&7|0)==0){ne=0}else{ne=-D&7}D=ee-40-ne|0
a[214]=re+ne
a[211]=D
a[re+(ne+4)>>2]=D|1
a[re+(ee-36)>>2]=40
a[215]=a[204]}else{D=1280
while(1){ae=a[D>>2]|0
oe=D+4|0
se=a[oe>>2]|0
if((re|0)==(ae+se|0)){X=324
break}te=a[D+8>>2]|0
if((te|0)==0){break}else{D=te}}do{if((X|0)==324){if((a[D+12>>2]&8|0)!=0){break}te=ie
if(!(te>>>0>=ae>>>0&te>>>0<re>>>0)){break}a[oe>>2]=se+ee
te=a[214]|0
J=(a[211]|0)+ee|0
W=te
H=te+8|0
if((H&7|0)==0){fe=0}else{fe=-H&7}H=J-fe|0
a[214]=W+fe
a[211]=H
a[W+(fe+4)>>2]=H|1
a[W+(J+4)>>2]=40
a[215]=a[204]
break e}}while(0)
if(re>>>0<(a[212]|0)>>>0){a[212]=re}D=re+ee|0
J=1280
while(1){ce=J|0
if((a[ce>>2]|0)==(D|0)){X=334
break}W=a[J+8>>2]|0
if((W|0)==0){break}else{J=W}}do{if((X|0)==334){if((a[J+12>>2]&8|0)!=0){break}a[ce>>2]=re
D=J+4|0
a[D>>2]=(a[D>>2]|0)+ee
D=re+8|0
if((D&7|0)==0){ue=0}else{ue=-D&7}D=re+(ee+8)|0
if((D&7|0)==0){le=0}else{le=-D&7}D=re+(le+ee)|0
W=D
H=ue+d|0
te=re+H|0
$=te
O=D-(re+ue)-d|0
a[re+(ue+4)>>2]=d|3
do{if((W|0)==(a[214]|0)){Y=(a[211]|0)+O|0
a[211]=Y
a[214]=$
a[re+(H+4)>>2]=Y|1}else{if((W|0)==(a[213]|0)){Y=(a[210]|0)+O|0
a[210]=Y
a[213]=$
a[re+(H+4)>>2]=Y|1
a[re+(Y+H)>>2]=Y
break}Y=ee+4|0
G=a[re+(Y+le)>>2]|0
if((G&3|0)==1){K=G&-8
Q=G>>>3
r:do{if(G>>>0<256){Z=a[re+((le|8)+ee)>>2]|0
j=a[re+(ee+12+le)>>2]|0
V=872+(Q<<1<<2)|0
do{if((Z|0)!=(V|0)){if(Z>>>0<(a[212]|0)>>>0){Ae()
return 0}if((a[Z+12>>2]|0)==(W|0)){break}Ae()
return 0}}while(0)
if((j|0)==(Z|0)){a[208]=a[208]&~(1<<Q)
break}do{if((j|0)==(V|0)){he=j+8|0}else{if(j>>>0<(a[212]|0)>>>0){Ae()
return 0}h=j+8|0
if((a[h>>2]|0)==(W|0)){he=h
break}Ae()
return 0}}while(0)
a[Z+12>>2]=j
a[he>>2]=Z}else{V=D
h=a[re+((le|24)+ee)>>2]|0
z=a[re+(ee+12+le)>>2]|0
do{if((z|0)==(V|0)){P=le|16
o=re+(Y+P)|0
B=a[o>>2]|0
if((B|0)==0){i=re+(P+ee)|0
P=a[i>>2]|0
if((P|0)==0){be=0
break}else{de=P
pe=i}}else{de=B
pe=o}while(1){o=de+20|0
B=a[o>>2]|0
if((B|0)!=0){de=B
pe=o
continue}o=de+16|0
B=a[o>>2]|0
if((B|0)==0){break}else{de=B
pe=o}}if(pe>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[pe>>2]=0
be=de
break}}else{o=a[re+((le|8)+ee)>>2]|0
if(o>>>0<(a[212]|0)>>>0){Ae()
return 0}B=o+12|0
if((a[B>>2]|0)!=(V|0)){Ae()
return 0}i=z+8|0
if((a[i>>2]|0)==(V|0)){a[B>>2]=z
a[i>>2]=o
be=z
break}else{Ae()
return 0}}}while(0)
if((h|0)==0){break}z=re+(ee+28+le)|0
Z=1136+(a[z>>2]<<2)|0
do{if((V|0)==(a[Z>>2]|0)){a[Z>>2]=be
if((be|0)!=0){break}a[209]=a[209]&~(1<<a[z>>2])
break r}else{if(h>>>0<(a[212]|0)>>>0){Ae()
return 0}j=h+16|0
if((a[j>>2]|0)==(V|0)){a[j>>2]=be}else{a[h+20>>2]=be}if((be|0)==0){break r}}}while(0)
if(be>>>0<(a[212]|0)>>>0){Ae()
return 0}a[be+24>>2]=h
V=le|16
z=a[re+(V+ee)>>2]|0
do{if((z|0)!=0){if(z>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[be+16>>2]=z
a[z+24>>2]=be
break}}}while(0)
z=a[re+(Y+V)>>2]|0
if((z|0)==0){break}if(z>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[be+20>>2]=z
a[z+24>>2]=be
break}}}while(0)
ve=re+((K|le)+ee)|0
we=K+O|0}else{ve=W
we=O}Y=ve+4|0
a[Y>>2]=a[Y>>2]&-2
a[re+(H+4)>>2]=we|1
a[re+(we+H)>>2]=we
Y=we>>>3
if(we>>>0<256){Q=Y<<1
G=872+(Q<<2)|0
z=a[208]|0
h=1<<Y
do{if((z&h|0)==0){a[208]=z|h
me=G
ke=872+(Q+2<<2)|0}else{Y=872+(Q+2<<2)|0
Z=a[Y>>2]|0
if(Z>>>0>=(a[212]|0)>>>0){me=Z
ke=Y
break}Ae()
return 0}}while(0)
a[ke>>2]=$
a[me+12>>2]=$
a[re+(H+8)>>2]=me
a[re+(H+12)>>2]=G
break}Q=te
h=we>>>8
do{if((h|0)==0){_e=0}else{if(we>>>0>16777215){_e=31
break}z=(h+1048320|0)>>>16&8
K=h<<z
Y=(K+520192|0)>>>16&4
Z=K<<Y
K=(Z+245760|0)>>>16&2
j=14-(Y|z|K)+(Z<<K>>>15)|0
_e=we>>>((j+7|0)>>>0)&1|j<<1}}while(0)
h=1136+(_e<<2)|0
a[re+(H+28)>>2]=_e
a[re+(H+20)>>2]=0
a[re+(H+16)>>2]=0
G=a[209]|0
j=1<<_e
if((G&j|0)==0){a[209]=G|j
a[h>>2]=Q
a[re+(H+24)>>2]=h
a[re+(H+12)>>2]=Q
a[re+(H+8)>>2]=Q
break}if((_e|0)==31){ye=0}else{ye=25-(_e>>>1)|0}j=we<<ye
G=a[h>>2]|0
while(1){if((a[G+4>>2]&-8|0)==(we|0)){break}Ee=G+16+(j>>>31<<2)|0
h=a[Ee>>2]|0
if((h|0)==0){X=407
break}else{j=j<<1
G=h}}if((X|0)==407){if(Ee>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[Ee>>2]=Q
a[re+(H+24)>>2]=G
a[re+(H+12)>>2]=Q
a[re+(H+8)>>2]=Q
break}}j=G+8|0
h=a[j>>2]|0
K=a[212]|0
if(G>>>0<K>>>0){Ae()
return 0}if(h>>>0<K>>>0){Ae()
return 0}else{a[h+12>>2]=Q
a[j>>2]=Q
a[re+(H+8)>>2]=h
a[re+(H+12)>>2]=G
a[re+(H+24)>>2]=0
break}}}while(0)
b=re+(ue|8)|0
return b|0}}while(0)
J=ie
H=1280
while(1){Me=a[H>>2]|0
if(Me>>>0<=J>>>0){Ne=a[H+4>>2]|0
Se=Me+Ne|0
if(Se>>>0>J>>>0){break}}H=a[H+8>>2]|0}H=Me+(Ne-39)|0
if((H&7|0)==0){Ie=0}else{Ie=-H&7}H=Me+(Ne-47+Ie)|0
te=H>>>0<(ie+16|0)>>>0?J:H
H=te+8|0
$=re+8|0
if(($&7|0)==0){Re=0}else{Re=-$&7}$=ee-40-Re|0
a[214]=re+Re
a[211]=$
a[re+(Re+4)>>2]=$|1
a[re+(ee-36)>>2]=40
a[215]=a[204]
a[te+4>>2]=27
a[H>>2]=a[320]
a[H+4>>2]=a[1284>>2]
a[H+8>>2]=a[1288>>2]
a[H+12>>2]=a[1292>>2]
a[320]=re
a[321]=ee
a[323]=0
a[322]=H
H=te+28|0
a[H>>2]=7
if((te+32|0)>>>0<Se>>>0){$=H
while(1){H=$+4|0
a[H>>2]=7
if(($+8|0)>>>0<Se>>>0){$=H}else{break}}}if((te|0)==(J|0)){break}$=te-ie|0
H=J+($+4)|0
a[H>>2]=a[H>>2]&-2
a[ie+4>>2]=$|1
a[J+$>>2]=$
H=$>>>3
if($>>>0<256){O=H<<1
W=872+(O<<2)|0
D=a[208]|0
h=1<<H
do{if((D&h|0)==0){a[208]=D|h
Te=W
Ce=872+(O+2<<2)|0}else{H=872+(O+2<<2)|0
j=a[H>>2]|0
if(j>>>0>=(a[212]|0)>>>0){Te=j
Ce=H
break}Ae()
return 0}}while(0)
a[Ce>>2]=ie
a[Te+12>>2]=ie
a[ie+8>>2]=Te
a[ie+12>>2]=W
break}O=ie
h=$>>>8
do{if((h|0)==0){xe=0}else{if($>>>0>16777215){xe=31
break}D=(h+1048320|0)>>>16&8
J=h<<D
te=(J+520192|0)>>>16&4
H=J<<te
J=(H+245760|0)>>>16&2
j=14-(te|D|J)+(H<<J>>>15)|0
xe=$>>>((j+7|0)>>>0)&1|j<<1}}while(0)
h=1136+(xe<<2)|0
a[ie+28>>2]=xe
a[ie+20>>2]=0
a[ie+16>>2]=0
W=a[209]|0
j=1<<xe
if((W&j|0)==0){a[209]=W|j
a[h>>2]=O
a[ie+24>>2]=h
a[ie+12>>2]=ie
a[ie+8>>2]=ie
break}if((xe|0)==31){qe=0}else{qe=25-(xe>>>1)|0}j=$<<qe
W=a[h>>2]|0
while(1){if((a[W+4>>2]&-8|0)==($|0)){break}Le=W+16+(j>>>31<<2)|0
h=a[Le>>2]|0
if((h|0)==0){X=442
break}else{j=j<<1
W=h}}if((X|0)==442){if(Le>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[Le>>2]=O
a[ie+24>>2]=W
a[ie+12>>2]=ie
a[ie+8>>2]=ie
break}}j=W+8|0
$=a[j>>2]|0
h=a[212]|0
if(W>>>0<h>>>0){Ae()
return 0}if($>>>0<h>>>0){Ae()
return 0}else{a[$+12>>2]=O
a[j>>2]=O
a[ie+8>>2]=$
a[ie+12>>2]=W
a[ie+24>>2]=0
break}}}while(0)
ie=a[211]|0
if(ie>>>0<=d>>>0){break}$=ie-d|0
a[211]=$
ie=a[214]|0
j=ie
a[214]=j+d
a[j+(d+4)>>2]=$|1
a[ie+4>>2]=d|3
b=ie+8|0
return b|0}}while(0)
a[($e()|0)>>2]=12
b=0
return b|0}function Xr(e){e=e|0
var r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0,F=0,U=0,P=0
if((e|0)==0){return}r=e-8|0
t=r
i=a[212]|0
if(r>>>0<i>>>0){Ae()}n=a[e-4>>2]|0
o=n&3
if((o|0)==1){Ae()}s=n&-8
f=e+(s-8)|0
c=f
e:do{if((n&1|0)==0){u=a[r>>2]|0
if((o|0)==0){return}l=-8-u|0
h=e+l|0
b=h
d=u+s|0
if(h>>>0<i>>>0){Ae()}if((b|0)==(a[213]|0)){p=e+(s-4)|0
if((a[p>>2]&3|0)!=3){v=b
w=d
break}a[210]=d
a[p>>2]=a[p>>2]&-2
a[e+(l+4)>>2]=d|1
a[f>>2]=d
return}p=u>>>3
if(u>>>0<256){u=a[e+(l+8)>>2]|0
m=a[e+(l+12)>>2]|0
k=872+(p<<1<<2)|0
do{if((u|0)!=(k|0)){if(u>>>0<i>>>0){Ae()}if((a[u+12>>2]|0)==(b|0)){break}Ae()}}while(0)
if((m|0)==(u|0)){a[208]=a[208]&~(1<<p)
v=b
w=d
break}do{if((m|0)==(k|0)){g=m+8|0}else{if(m>>>0<i>>>0){Ae()}_=m+8|0
if((a[_>>2]|0)==(b|0)){g=_
break}Ae()}}while(0)
a[u+12>>2]=m
a[g>>2]=u
v=b
w=d
break}k=h
p=a[e+(l+24)>>2]|0
_=a[e+(l+12)>>2]|0
do{if((_|0)==(k|0)){y=e+(l+20)|0
A=a[y>>2]|0
if((A|0)==0){E=e+(l+16)|0
M=a[E>>2]|0
if((M|0)==0){N=0
break}else{S=M
I=E}}else{S=A
I=y}while(1){y=S+20|0
A=a[y>>2]|0
if((A|0)!=0){S=A
I=y
continue}y=S+16|0
A=a[y>>2]|0
if((A|0)==0){break}else{S=A
I=y}}if(I>>>0<i>>>0){Ae()}else{a[I>>2]=0
N=S
break}}else{y=a[e+(l+8)>>2]|0
if(y>>>0<i>>>0){Ae()}A=y+12|0
if((a[A>>2]|0)!=(k|0)){Ae()}E=_+8|0
if((a[E>>2]|0)==(k|0)){a[A>>2]=_
a[E>>2]=y
N=_
break}else{Ae()}}}while(0)
if((p|0)==0){v=b
w=d
break}_=e+(l+28)|0
h=1136+(a[_>>2]<<2)|0
do{if((k|0)==(a[h>>2]|0)){a[h>>2]=N
if((N|0)!=0){break}a[209]=a[209]&~(1<<a[_>>2])
v=b
w=d
break e}else{if(p>>>0<(a[212]|0)>>>0){Ae()}u=p+16|0
if((a[u>>2]|0)==(k|0)){a[u>>2]=N}else{a[p+20>>2]=N}if((N|0)==0){v=b
w=d
break e}}}while(0)
if(N>>>0<(a[212]|0)>>>0){Ae()}a[N+24>>2]=p
k=a[e+(l+16)>>2]|0
do{if((k|0)!=0){if(k>>>0<(a[212]|0)>>>0){Ae()}else{a[N+16>>2]=k
a[k+24>>2]=N
break}}}while(0)
k=a[e+(l+20)>>2]|0
if((k|0)==0){v=b
w=d
break}if(k>>>0<(a[212]|0)>>>0){Ae()}else{a[N+20>>2]=k
a[k+24>>2]=N
v=b
w=d
break}}else{v=t
w=s}}while(0)
t=v
if(t>>>0>=f>>>0){Ae()}N=e+(s-4)|0
i=a[N>>2]|0
if((i&1|0)==0){Ae()}do{if((i&2|0)==0){if((c|0)==(a[214]|0)){S=(a[211]|0)+w|0
a[211]=S
a[214]=v
a[v+4>>2]=S|1
if((v|0)==(a[213]|0)){a[213]=0
a[210]=0}if(S>>>0<=(a[215]|0)>>>0){return}Wr(0)|0
return}if((c|0)==(a[213]|0)){S=(a[210]|0)+w|0
a[210]=S
a[213]=v
a[v+4>>2]=S|1
a[t+S>>2]=S
return}S=(i&-8)+w|0
I=i>>>3
e:do{if(i>>>0<256){g=a[e+s>>2]|0
o=a[e+(s|4)>>2]|0
r=872+(I<<1<<2)|0
do{if((g|0)!=(r|0)){if(g>>>0<(a[212]|0)>>>0){Ae()}if((a[g+12>>2]|0)==(c|0)){break}Ae()}}while(0)
if((o|0)==(g|0)){a[208]=a[208]&~(1<<I)
break}do{if((o|0)==(r|0)){R=o+8|0}else{if(o>>>0<(a[212]|0)>>>0){Ae()}n=o+8|0
if((a[n>>2]|0)==(c|0)){R=n
break}Ae()}}while(0)
a[g+12>>2]=o
a[R>>2]=g}else{r=f
n=a[e+(s+16)>>2]|0
k=a[e+(s|4)>>2]|0
do{if((k|0)==(r|0)){p=e+(s+12)|0
_=a[p>>2]|0
if((_|0)==0){h=e+(s+8)|0
u=a[h>>2]|0
if((u|0)==0){T=0
break}else{C=u
x=h}}else{C=_
x=p}while(1){p=C+20|0
_=a[p>>2]|0
if((_|0)!=0){C=_
x=p
continue}p=C+16|0
_=a[p>>2]|0
if((_|0)==0){break}else{C=_
x=p}}if(x>>>0<(a[212]|0)>>>0){Ae()}else{a[x>>2]=0
T=C
break}}else{p=a[e+s>>2]|0
if(p>>>0<(a[212]|0)>>>0){Ae()}_=p+12|0
if((a[_>>2]|0)!=(r|0)){Ae()}h=k+8|0
if((a[h>>2]|0)==(r|0)){a[_>>2]=k
a[h>>2]=p
T=k
break}else{Ae()}}}while(0)
if((n|0)==0){break}k=e+(s+20)|0
g=1136+(a[k>>2]<<2)|0
do{if((r|0)==(a[g>>2]|0)){a[g>>2]=T
if((T|0)!=0){break}a[209]=a[209]&~(1<<a[k>>2])
break e}else{if(n>>>0<(a[212]|0)>>>0){Ae()}o=n+16|0
if((a[o>>2]|0)==(r|0)){a[o>>2]=T}else{a[n+20>>2]=T}if((T|0)==0){break e}}}while(0)
if(T>>>0<(a[212]|0)>>>0){Ae()}a[T+24>>2]=n
r=a[e+(s+8)>>2]|0
do{if((r|0)!=0){if(r>>>0<(a[212]|0)>>>0){Ae()}else{a[T+16>>2]=r
a[r+24>>2]=T
break}}}while(0)
r=a[e+(s+12)>>2]|0
if((r|0)==0){break}if(r>>>0<(a[212]|0)>>>0){Ae()}else{a[T+20>>2]=r
a[r+24>>2]=T
break}}}while(0)
a[v+4>>2]=S|1
a[t+S>>2]=S
if((v|0)!=(a[213]|0)){q=S
break}a[210]=S
return}else{a[N>>2]=i&-2
a[v+4>>2]=w|1
a[t+w>>2]=w
q=w}}while(0)
w=q>>>3
if(q>>>0<256){t=w<<1
i=872+(t<<2)|0
N=a[208]|0
T=1<<w
do{if((N&T|0)==0){a[208]=N|T
L=i
Y=872+(t+2<<2)|0}else{w=872+(t+2<<2)|0
s=a[w>>2]|0
if(s>>>0>=(a[212]|0)>>>0){L=s
Y=w
break}Ae()}}while(0)
a[Y>>2]=v
a[L+12>>2]=v
a[v+8>>2]=L
a[v+12>>2]=i
return}i=v
L=q>>>8
do{if((L|0)==0){O=0}else{if(q>>>0>16777215){O=31
break}Y=(L+1048320|0)>>>16&8
t=L<<Y
T=(t+520192|0)>>>16&4
N=t<<T
t=(N+245760|0)>>>16&2
w=14-(T|Y|t)+(N<<t>>>15)|0
O=q>>>((w+7|0)>>>0)&1|w<<1}}while(0)
L=1136+(O<<2)|0
a[v+28>>2]=O
a[v+20>>2]=0
a[v+16>>2]=0
w=a[209]|0
t=1<<O
do{if((w&t|0)==0){a[209]=w|t
a[L>>2]=i
a[v+24>>2]=L
a[v+12>>2]=v
a[v+8>>2]=v}else{if((O|0)==31){B=0}else{B=25-(O>>>1)|0}N=q<<B
Y=a[L>>2]|0
while(1){if((a[Y+4>>2]&-8|0)==(q|0)){break}F=Y+16+(N>>>31<<2)|0
T=a[F>>2]|0
if((T|0)==0){U=621
break}else{N=N<<1
Y=T}}if((U|0)==621){if(F>>>0<(a[212]|0)>>>0){Ae()}else{a[F>>2]=i
a[v+24>>2]=Y
a[v+12>>2]=v
a[v+8>>2]=v
break}}N=Y+8|0
S=a[N>>2]|0
T=a[212]|0
if(Y>>>0<T>>>0){Ae()}if(S>>>0<T>>>0){Ae()}else{a[S+12>>2]=i
a[N>>2]=i
a[v+8>>2]=S
a[v+12>>2]=Y
a[v+24>>2]=0
break}}}while(0)
v=(a[216]|0)-1|0
a[216]=v
if((v|0)==0){P=1288}else{return}while(1){v=a[P>>2]|0
if((v|0)==0){break}else{P=v+8|0}}a[216]=-1
return}function Zr(e,r){e=e|0
r=r|0
var t=0,i=0
do{if((e|0)==0){t=0}else{i=oe(r,e)|0
if((r|e)>>>0<=65535){t=i
break}t=((i>>>0)/(e>>>0)|0|0)==(r|0)?i:-1}}while(0)
r=Dr(t)|0
if((r|0)==0){return r|0}if((a[r-4>>2]&3|0)==0){return r|0}ei(r|0,0,t|0)
return r|0}function Qr(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0
if((e|0)==0){t=Dr(r)|0
return t|0}if(r>>>0>4294967231){a[($e()|0)>>2]=12
t=0
return t|0}if(r>>>0<11){i=16}else{i=r+11&-8}n=$r(e-8|0,i)|0
if((n|0)!=0){t=n+8|0
return t|0}n=Dr(r)|0
if((n|0)==0){t=0
return t|0}i=a[e-4>>2]|0
o=(i&-8)-((i&3|0)==0?8:4)|0
i=o>>>0<r>>>0?o:r
Kt(n|0,e|0,i)|0
Xr(e)
t=n
return t|0}function Hr(e,r){e=e|0
r=r|0
var t=0
if((e|0)==0){return 0}if(r>>>0>4294967231){a[($e()|0)>>2]=12
return 0}if(r>>>0<11){t=16}else{t=r+11&-8}r=e-8|0
return(($r(r,t)|0)==(r|0)?e:0)|0}function Gr(e,r){e=e|0
r=r|0
var t=0
if(e>>>0<9){t=Dr(r)|0
return t|0}else{t=Jr(e,r)|0
return t|0}return 0}function Jr(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0
t=e>>>0<16?16:e
if((t-1&t|0)==0){i=t}else{e=16
while(1){if(e>>>0<t>>>0){e=e<<1}else{i=e
break}}}if((-64-i|0)>>>0<=r>>>0){a[($e()|0)>>2]=12
n=0
return n|0}if(r>>>0<11){o=16}else{o=r+11&-8}r=Dr(i+12+o|0)|0
if((r|0)==0){n=0
return n|0}e=r-8|0
t=e
s=i-1|0
do{if((r&s|0)==0){f=t}else{c=r+s&-i
u=c-8|0
l=e
if((u-l|0)>>>0>15){h=u}else{h=c+(i-8)|0}c=h
u=h-l|0
l=r-4|0
b=a[l>>2]|0
d=(b&-8)-u|0
if((b&3|0)==0){a[h>>2]=(a[e>>2]|0)+u
a[h+4>>2]=d
f=c
break}else{b=h+4|0
a[b>>2]=d|a[b>>2]&1|2
b=h+(d+4)|0
a[b>>2]=a[b>>2]|1
a[l>>2]=u|a[l>>2]&1|2
l=r+(u-4)|0
a[l>>2]=a[l>>2]|1
vt(t,u)
f=c
break}}}while(0)
t=f+4|0
r=a[t>>2]|0
do{if((r&3|0)!=0){h=r&-8
if(h>>>0<=(o+16|0)>>>0){break}e=h-o|0
i=f
a[t>>2]=o|r&1|2
a[i+(o|4)>>2]=e|3
s=i+(h|4)|0
a[s>>2]=a[s>>2]|1
vt(i+o|0,e)}}while(0)
n=f+8|0
return n|0}function Wr(e){e=e|0
var r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0
do{if((a[200]|0)==0){r=ge(8)|0
if((r-1&r|0)==0){a[202]=r
a[201]=r
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()
return 0}}}while(0)
if(e>>>0>=4294967232){t=0
return t|0}r=a[214]|0
if((r|0)==0){t=0
return t|0}i=a[211]|0
do{if(i>>>0>(e+40|0)>>>0){n=a[202]|0
o=oe((((-40-e-1+i+n|0)>>>0)/(n>>>0)|0)-1|0,n)|0
s=r
f=1280
while(1){c=a[f>>2]|0
if(c>>>0<=s>>>0){if((c+(a[f+4>>2]|0)|0)>>>0>s>>>0){u=f
break}}c=a[f+8>>2]|0
if((c|0)==0){u=0
break}else{f=c}}if((a[u+12>>2]&8|0)!=0){break}f=Je(0)|0
s=u+4|0
if((f|0)!=((a[u>>2]|0)+(a[s>>2]|0)|0)){break}c=Je(-(o>>>0>2147483646?-2147483648-n|0:o)|0)|0
l=Je(0)|0
if(!((c|0)!=-1&l>>>0<f>>>0)){break}c=f-l|0
if((f|0)==(l|0)){break}a[s>>2]=(a[s>>2]|0)-c
a[316]=(a[316]|0)-c
s=a[214]|0
h=(a[211]|0)-c|0
c=s
b=s+8|0
if((b&7|0)==0){d=0}else{d=-b&7}b=h-d|0
a[214]=c+d
a[211]=b
a[c+(d+4)>>2]=b|1
a[c+(h+4)>>2]=40
a[215]=a[204]
t=(f|0)!=(l|0)|0
return t|0}}while(0)
if((a[211]|0)>>>0<=(a[215]|0)>>>0){t=0
return t|0}a[215]=-1
t=0
return t|0}function $r(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0
t=e+4|0
i=a[t>>2]|0
n=i&-8
o=e
s=o+n|0
f=s
c=a[212]|0
if(o>>>0<c>>>0){Ae()
return 0}u=i&3
if(!((u|0)!=1&o>>>0<s>>>0)){Ae()
return 0}l=o+(n|4)|0
h=a[l>>2]|0
if((h&1|0)==0){Ae()
return 0}if((u|0)==0){if(r>>>0<256){b=0
return b|0}do{if(n>>>0>=(r+4|0)>>>0){if((n-r|0)>>>0>a[202]<<1>>>0){break}else{b=e}return b|0}}while(0)
b=0
return b|0}if(n>>>0>=r>>>0){u=n-r|0
if(u>>>0<=15){b=e
return b|0}a[t>>2]=i&1|r|2
a[o+(r+4)>>2]=u|3
a[l>>2]=a[l>>2]|1
vt(o+r|0,u)
b=e
return b|0}if((f|0)==(a[214]|0)){u=(a[211]|0)+n|0
if(u>>>0<=r>>>0){b=0
return b|0}l=u-r|0
a[t>>2]=i&1|r|2
a[o+(r+4)>>2]=l|1
a[214]=o+r
a[211]=l
b=e
return b|0}if((f|0)==(a[213]|0)){l=(a[210]|0)+n|0
if(l>>>0<r>>>0){b=0
return b|0}u=l-r|0
if(u>>>0>15){a[t>>2]=i&1|r|2
a[o+(r+4)>>2]=u|1
a[o+l>>2]=u
d=o+(l+4)|0
a[d>>2]=a[d>>2]&-2
p=o+r|0
v=u}else{a[t>>2]=i&1|l|2
i=o+(l+4)|0
a[i>>2]=a[i>>2]|1
p=0
v=0}a[210]=v
a[213]=p
b=e
return b|0}if((h&2|0)!=0){b=0
return b|0}p=(h&-8)+n|0
if(p>>>0<r>>>0){b=0
return b|0}v=p-r|0
i=h>>>3
e:do{if(h>>>0<256){l=a[o+(n+8)>>2]|0
u=a[o+(n+12)>>2]|0
d=872+(i<<1<<2)|0
do{if((l|0)!=(d|0)){if(l>>>0<c>>>0){Ae()
return 0}if((a[l+12>>2]|0)==(f|0)){break}Ae()
return 0}}while(0)
if((u|0)==(l|0)){a[208]=a[208]&~(1<<i)
break}do{if((u|0)==(d|0)){w=u+8|0}else{if(u>>>0<c>>>0){Ae()
return 0}m=u+8|0
if((a[m>>2]|0)==(f|0)){w=m
break}Ae()
return 0}}while(0)
a[l+12>>2]=u
a[w>>2]=l}else{d=s
m=a[o+(n+24)>>2]|0
k=a[o+(n+12)>>2]|0
do{if((k|0)==(d|0)){g=o+(n+20)|0
_=a[g>>2]|0
if((_|0)==0){y=o+(n+16)|0
A=a[y>>2]|0
if((A|0)==0){E=0
break}else{M=A
N=y}}else{M=_
N=g}while(1){g=M+20|0
_=a[g>>2]|0
if((_|0)!=0){M=_
N=g
continue}g=M+16|0
_=a[g>>2]|0
if((_|0)==0){break}else{M=_
N=g}}if(N>>>0<c>>>0){Ae()
return 0}else{a[N>>2]=0
E=M
break}}else{g=a[o+(n+8)>>2]|0
if(g>>>0<c>>>0){Ae()
return 0}_=g+12|0
if((a[_>>2]|0)!=(d|0)){Ae()
return 0}y=k+8|0
if((a[y>>2]|0)==(d|0)){a[_>>2]=k
a[y>>2]=g
E=k
break}else{Ae()
return 0}}}while(0)
if((m|0)==0){break}k=o+(n+28)|0
l=1136+(a[k>>2]<<2)|0
do{if((d|0)==(a[l>>2]|0)){a[l>>2]=E
if((E|0)!=0){break}a[209]=a[209]&~(1<<a[k>>2])
break e}else{if(m>>>0<(a[212]|0)>>>0){Ae()
return 0}u=m+16|0
if((a[u>>2]|0)==(d|0)){a[u>>2]=E}else{a[m+20>>2]=E}if((E|0)==0){break e}}}while(0)
if(E>>>0<(a[212]|0)>>>0){Ae()
return 0}a[E+24>>2]=m
d=a[o+(n+16)>>2]|0
do{if((d|0)!=0){if(d>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[E+16>>2]=d
a[d+24>>2]=E
break}}}while(0)
d=a[o+(n+20)>>2]|0
if((d|0)==0){break}if(d>>>0<(a[212]|0)>>>0){Ae()
return 0}else{a[E+20>>2]=d
a[d+24>>2]=E
break}}}while(0)
if(v>>>0<16){a[t>>2]=p|a[t>>2]&1|2
E=o+(p|4)|0
a[E>>2]=a[E>>2]|1
b=e
return b|0}else{a[t>>2]=a[t>>2]&1|r|2
a[o+(r+4)>>2]=v|3
t=o+(p|4)|0
a[t>>2]=a[t>>2]|1
vt(o+r|0,v)
b=e
return b|0}return 0}function Kr(){return a[316]|0}function et(){return a[317]|0}function rt(){var e=0
e=a[318]|0
return((e|0)==0?-1:e)|0}function tt(e){e=e|0
var r=0,t=0
if((e|0)==-1){r=0}else{t=a[202]|0
r=e-1+t&-t}a[318]=r
return r|0}function it(e){e=e|0
var r=0,t=0,i=0
do{if((e|0)==0){r=0}else{t=a[e-4>>2]|0
i=t&3
if((i|0)==1){r=0
break}r=(t&-8)-((i|0)==0?8:4)|0}}while(0)
return r|0}function nt(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0,o=0
do{if((r|0)==8){i=Dr(t)|0}else{n=r>>>2
if((r&3|0)!=0|(n|0)==0){o=22
return o|0}if((n+1073741823&n|0)!=0){o=22
return o|0}if((-64-r|0)>>>0<t>>>0){o=12
return o|0}else{i=Jr(r>>>0<16?16:r,t)|0
break}}}while(0)
if((i|0)==0){o=12
return o|0}a[e>>2]=i
o=0
return o|0}function at(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0
i=l
l=l+8|0
n=i|0
a[n>>2]=r
r=ct(e,n,3,t)|0
l=i
return r|0}function ot(e,r,t){e=e|0
r=r|0
t=t|0
return ct(e,r,0,t)|0}function st(e){e=e|0
var r=0,t=0,i=0
if((a[200]|0)!=0){r=a[201]|0
t=Gr(r,e)|0
return t|0}i=ge(8)|0
if((i-1&i|0)!=0){Ae()
return 0}a[202]=i
a[201]=i
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
r=a[201]|0
t=Gr(r,e)|0
return t|0}function ft(e){e=e|0
var r=0
do{if((a[200]|0)==0){r=ge(8)|0
if((r-1&r|0)==0){a[202]=r
a[201]=r
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()
return 0}}}while(0)
r=a[201]|0
return Gr(r,e-1+r&-r)|0}function ct(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0
do{if((a[200]|0)==0){n=ge(8)|0
if((n-1&n|0)==0){a[202]=n
a[201]=n
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()
return 0}}}while(0)
n=(e|0)==0
do{if((i|0)==0){if(n){o=Dr(0)|0
return o|0}else{s=e<<2
if(s>>>0<11){f=0
c=16
break}f=0
c=s+11&-8
break}}else{if(n){o=i}else{f=i
c=0
break}return o|0}}while(0)
do{if((t&1|0)==0){if(n){u=0
l=0
break}else{h=0
b=0}while(1){i=a[r+(b<<2)>>2]|0
if(i>>>0<11){d=16}else{d=i+11&-8}i=d+h|0
s=b+1|0
if((s|0)==(e|0)){u=0
l=i
break}else{h=i
b=s}}}else{s=a[r>>2]|0
if(s>>>0<11){p=16}else{p=s+11&-8}u=p
l=oe(p,e)|0}}while(0)
p=Dr(c-4+l|0)|0
if((p|0)==0){o=0
return o|0}b=p-8|0
h=a[p-4>>2]&-8
if((t&2|0)!=0){ei(p|0,0,-4-c+h|0)}if((f|0)==0){a[p+(l-4)>>2]=h-l|3
v=p+l|0
w=l}else{v=f
w=h}a[v>>2]=p
p=e-1|0
e:do{if((p|0)==0){m=b
k=w}else{if((u|0)==0){g=b
_=w
y=0}else{e=b
h=w
f=0
while(1){l=h-u|0
a[e+4>>2]=u|3
c=e+u|0
t=f+1|0
a[v+(t<<2)>>2]=e+(u+8)
if((t|0)==(p|0)){m=c
k=l
break e}else{e=c
h=l
f=t}}}while(1){f=a[r+(y<<2)>>2]|0
if(f>>>0<11){A=16}else{A=f+11&-8}f=_-A|0
a[g+4>>2]=A|3
h=g+A|0
e=y+1|0
a[v+(e<<2)>>2]=g+(A+8)
if((e|0)==(p|0)){m=h
k=f
break}else{g=h
_=f
y=e}}}}while(0)
a[m+4>>2]=k|3
o=v
return o|0}function ut(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0
t=e+(r<<2)|0
e:do{if((r|0)!=0){i=e
r:while(1){n=a[i>>2]|0
t:do{if((n|0)==0){o=i+4|0}else{s=n-8|0
f=s
c=n-4|0
u=a[c>>2]&-8
a[i>>2]=0
if(s>>>0<(a[212]|0)>>>0){l=935
break r}s=a[c>>2]|0
if((s&3|0)==1){l=936
break r}h=i+4|0
b=s-8&-8
do{if((h|0)!=(t|0)){if((a[h>>2]|0)!=(n+(b+8)|0)){break}d=(a[n+(b|4)>>2]&-8)+u|0
a[c>>2]=s&1|d|2
p=n+(d-4)|0
a[p>>2]=a[p>>2]|1
a[h>>2]=n
o=h
break t}}while(0)
vt(f,u)
o=h}}while(0)
if((o|0)==(t|0)){break e}else{i=o}}if((l|0)==935){Ae()
return 0}else if((l|0)==936){Ae()
return 0}}}while(0)
if((a[211]|0)>>>0<=(a[215]|0)>>>0){return 0}Wr(0)|0
return 0}function lt(e){e=e|0
var r=0,t=0
if((a[200]|0)!=0){r=Wr(e)|0
return r|0}t=ge(8)|0
if((t-1&t|0)!=0){Ae()
return 0}a[202]=t
a[201]=t
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
r=Wr(e)|0
return r|0}function ht(e){e=e|0
var r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0
do{if((a[200]|0)==0){r=ge(8)|0
if((r-1&r|0)==0){a[202]=r
a[201]=r
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()}}}while(0)
r=a[214]|0
if((r|0)==0){t=0
i=0
n=0
o=0
s=0
f=0
c=0}else{u=a[211]|0
l=u+40|0
h=1
b=l
d=l
l=1280
while(1){p=a[l>>2]|0
v=p+8|0
if((v&7|0)==0){w=0}else{w=-v&7}v=p+(a[l+4>>2]|0)|0
m=h
k=b
g=d
_=p+w|0
while(1){if(_>>>0>=v>>>0|(_|0)==(r|0)){y=m
A=k
E=g
break}M=a[_+4>>2]|0
if((M|0)==7){y=m
A=k
E=g
break}N=M&-8
S=N+g|0
if((M&3|0)==1){I=N+k|0
R=m+1|0}else{I=k
R=m}M=_+N|0
if(M>>>0<p>>>0){y=R
A=I
E=S
break}else{m=R
k=I
g=S
_=M}}_=a[l+8>>2]|0
if((_|0)==0){break}else{h=y
b=A
d=E
l=_}}l=a[316]|0
t=u
i=E
n=y
o=l-E|0
s=a[317]|0
f=l-A|0
c=A}a[e>>2]=i
a[e+4>>2]=n
n=e+8|0
a[n>>2]=0
a[n+4>>2]=0
a[e+16>>2]=o
a[e+20>>2]=s
a[e+24>>2]=0
a[e+28>>2]=f
a[e+32>>2]=c
a[e+36>>2]=t
return}function bt(){var e=0,r=0,t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,h=0,b=0,d=0,p=0,v=0,m=0,k=0,g=0
e=l
do{if((a[200]|0)==0){r=ge(8)|0
if((r-1&r|0)==0){a[202]=r
a[201]=r
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()}}}while(0)
r=a[214]|0
if((r|0)==0){t=0
i=0
n=0}else{o=a[317]|0
s=a[316]|0
f=s-40-(a[211]|0)|0
c=1280
while(1){u=a[c>>2]|0
h=u+8|0
if((h&7|0)==0){b=0}else{b=-h&7}h=u+(a[c+4>>2]|0)|0
d=f
p=u+b|0
while(1){if(p>>>0>=h>>>0|(p|0)==(r|0)){v=d
break}m=a[p+4>>2]|0
if((m|0)==7){v=d
break}k=m&-8
g=d-((m&3|0)==1?k:0)|0
m=p+k|0
if(m>>>0<u>>>0){v=g
break}else{d=g
p=m}}p=a[c+8>>2]|0
if((p|0)==0){t=v
i=s
n=o
break}else{f=v
c=p}}}Ee(a[w>>2]|0,520,(S=l,l=l+8|0,a[S>>2]=n,S)|0)|0
Ee(a[w>>2]|0,488,(S=l,l=l+8|0,a[S>>2]=i,S)|0)|0
Ee(a[w>>2]|0,400,(S=l,l=l+8|0,a[S>>2]=t,S)|0)|0
l=e
return}function dt(e,r){e=e|0
r=r|0
var t=0,i=0
do{if((a[200]|0)==0){t=ge(8)|0
if((t-1&t|0)==0){a[202]=t
a[201]=t
a[203]=-1
a[204]=2097152
a[205]=0
a[319]=0
a[200]=(rr(0)|0)&-16^1431655768
break}else{Ae()
return 0}}}while(0)
if((e|0)==(-1|0)){a[204]=r
i=1
return i|0}else if((e|0)==(-2|0)){if((a[201]|0)>>>0>r>>>0){i=0
return i|0}if((r-1&r|0)!=0){i=0
return i|0}a[202]=r
i=1
return i|0}else if((e|0)==(-3|0)){a[203]=r
i=1
return i|0}else{i=0
return i|0}return 0}function pt(){return(L=a[328]|0,a[328]=L+0,L)|0}function vt(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0
t=e
i=t+r|0
n=i
o=a[e+4>>2]|0
e:do{if((o&1|0)==0){s=a[e>>2]|0
if((o&3|0)==0){return}f=t+(-s|0)|0
c=f
u=s+r|0
l=a[212]|0
if(f>>>0<l>>>0){Ae()}if((c|0)==(a[213]|0)){h=t+(r+4)|0
if((a[h>>2]&3|0)!=3){b=c
d=u
break}a[210]=u
a[h>>2]=a[h>>2]&-2
a[t+(4-s)>>2]=u|1
a[i>>2]=u
return}h=s>>>3
if(s>>>0<256){p=a[t+(8-s)>>2]|0
v=a[t+(12-s)>>2]|0
w=872+(h<<1<<2)|0
do{if((p|0)!=(w|0)){if(p>>>0<l>>>0){Ae()}if((a[p+12>>2]|0)==(c|0)){break}Ae()}}while(0)
if((v|0)==(p|0)){a[208]=a[208]&~(1<<h)
b=c
d=u
break}do{if((v|0)==(w|0)){m=v+8|0}else{if(v>>>0<l>>>0){Ae()}k=v+8|0
if((a[k>>2]|0)==(c|0)){m=k
break}Ae()}}while(0)
a[p+12>>2]=v
a[m>>2]=p
b=c
d=u
break}w=f
h=a[t+(24-s)>>2]|0
k=a[t+(12-s)>>2]|0
do{if((k|0)==(w|0)){g=16-s|0
_=t+(g+4)|0
y=a[_>>2]|0
if((y|0)==0){A=t+g|0
g=a[A>>2]|0
if((g|0)==0){E=0
break}else{M=g
N=A}}else{M=y
N=_}while(1){_=M+20|0
y=a[_>>2]|0
if((y|0)!=0){M=y
N=_
continue}_=M+16|0
y=a[_>>2]|0
if((y|0)==0){break}else{M=y
N=_}}if(N>>>0<l>>>0){Ae()}else{a[N>>2]=0
E=M
break}}else{_=a[t+(8-s)>>2]|0
if(_>>>0<l>>>0){Ae()}y=_+12|0
if((a[y>>2]|0)!=(w|0)){Ae()}A=k+8|0
if((a[A>>2]|0)==(w|0)){a[y>>2]=k
a[A>>2]=_
E=k
break}else{Ae()}}}while(0)
if((h|0)==0){b=c
d=u
break}k=t+(28-s)|0
l=1136+(a[k>>2]<<2)|0
do{if((w|0)==(a[l>>2]|0)){a[l>>2]=E
if((E|0)!=0){break}a[209]=a[209]&~(1<<a[k>>2])
b=c
d=u
break e}else{if(h>>>0<(a[212]|0)>>>0){Ae()}f=h+16|0
if((a[f>>2]|0)==(w|0)){a[f>>2]=E}else{a[h+20>>2]=E}if((E|0)==0){b=c
d=u
break e}}}while(0)
if(E>>>0<(a[212]|0)>>>0){Ae()}a[E+24>>2]=h
w=16-s|0
k=a[t+w>>2]|0
do{if((k|0)!=0){if(k>>>0<(a[212]|0)>>>0){Ae()}else{a[E+16>>2]=k
a[k+24>>2]=E
break}}}while(0)
k=a[t+(w+4)>>2]|0
if((k|0)==0){b=c
d=u
break}if(k>>>0<(a[212]|0)>>>0){Ae()}else{a[E+20>>2]=k
a[k+24>>2]=E
b=c
d=u
break}}else{b=e
d=r}}while(0)
e=a[212]|0
if(i>>>0<e>>>0){Ae()}E=t+(r+4)|0
M=a[E>>2]|0
do{if((M&2|0)==0){if((n|0)==(a[214]|0)){N=(a[211]|0)+d|0
a[211]=N
a[214]=b
a[b+4>>2]=N|1
if((b|0)!=(a[213]|0)){return}a[213]=0
a[210]=0
return}if((n|0)==(a[213]|0)){N=(a[210]|0)+d|0
a[210]=N
a[213]=b
a[b+4>>2]=N|1
a[b+N>>2]=N
return}N=(M&-8)+d|0
m=M>>>3
e:do{if(M>>>0<256){o=a[t+(r+8)>>2]|0
k=a[t+(r+12)>>2]|0
s=872+(m<<1<<2)|0
do{if((o|0)!=(s|0)){if(o>>>0<e>>>0){Ae()}if((a[o+12>>2]|0)==(n|0)){break}Ae()}}while(0)
if((k|0)==(o|0)){a[208]=a[208]&~(1<<m)
break}do{if((k|0)==(s|0)){S=k+8|0}else{if(k>>>0<e>>>0){Ae()}h=k+8|0
if((a[h>>2]|0)==(n|0)){S=h
break}Ae()}}while(0)
a[o+12>>2]=k
a[S>>2]=o}else{s=i
h=a[t+(r+24)>>2]|0
l=a[t+(r+12)>>2]|0
do{if((l|0)==(s|0)){f=t+(r+20)|0
p=a[f>>2]|0
if((p|0)==0){v=t+(r+16)|0
_=a[v>>2]|0
if((_|0)==0){I=0
break}else{R=_
T=v}}else{R=p
T=f}while(1){f=R+20|0
p=a[f>>2]|0
if((p|0)!=0){R=p
T=f
continue}f=R+16|0
p=a[f>>2]|0
if((p|0)==0){break}else{R=p
T=f}}if(T>>>0<e>>>0){Ae()}else{a[T>>2]=0
I=R
break}}else{f=a[t+(r+8)>>2]|0
if(f>>>0<e>>>0){Ae()}p=f+12|0
if((a[p>>2]|0)!=(s|0)){Ae()}v=l+8|0
if((a[v>>2]|0)==(s|0)){a[p>>2]=l
a[v>>2]=f
I=l
break}else{Ae()}}}while(0)
if((h|0)==0){break}l=t+(r+28)|0
o=1136+(a[l>>2]<<2)|0
do{if((s|0)==(a[o>>2]|0)){a[o>>2]=I
if((I|0)!=0){break}a[209]=a[209]&~(1<<a[l>>2])
break e}else{if(h>>>0<(a[212]|0)>>>0){Ae()}k=h+16|0
if((a[k>>2]|0)==(s|0)){a[k>>2]=I}else{a[h+20>>2]=I}if((I|0)==0){break e}}}while(0)
if(I>>>0<(a[212]|0)>>>0){Ae()}a[I+24>>2]=h
s=a[t+(r+16)>>2]|0
do{if((s|0)!=0){if(s>>>0<(a[212]|0)>>>0){Ae()}else{a[I+16>>2]=s
a[s+24>>2]=I
break}}}while(0)
s=a[t+(r+20)>>2]|0
if((s|0)==0){break}if(s>>>0<(a[212]|0)>>>0){Ae()}else{a[I+20>>2]=s
a[s+24>>2]=I
break}}}while(0)
a[b+4>>2]=N|1
a[b+N>>2]=N
if((b|0)!=(a[213]|0)){C=N
break}a[210]=N
return}else{a[E>>2]=M&-2
a[b+4>>2]=d|1
a[b+d>>2]=d
C=d}}while(0)
d=C>>>3
if(C>>>0<256){M=d<<1
E=872+(M<<2)|0
I=a[208]|0
r=1<<d
do{if((I&r|0)==0){a[208]=I|r
x=E
q=872+(M+2<<2)|0}else{d=872+(M+2<<2)|0
t=a[d>>2]|0
if(t>>>0>=(a[212]|0)>>>0){x=t
q=d
break}Ae()}}while(0)
a[q>>2]=b
a[x+12>>2]=b
a[b+8>>2]=x
a[b+12>>2]=E
return}E=b
x=C>>>8
do{if((x|0)==0){L=0}else{if(C>>>0>16777215){L=31
break}q=(x+1048320|0)>>>16&8
M=x<<q
r=(M+520192|0)>>>16&4
I=M<<r
M=(I+245760|0)>>>16&2
d=14-(r|q|M)+(I<<M>>>15)|0
L=C>>>((d+7|0)>>>0)&1|d<<1}}while(0)
x=1136+(L<<2)|0
a[b+28>>2]=L
a[b+20>>2]=0
a[b+16>>2]=0
d=a[209]|0
M=1<<L
if((d&M|0)==0){a[209]=d|M
a[x>>2]=E
a[b+24>>2]=x
a[b+12>>2]=b
a[b+8>>2]=b
return}if((L|0)==31){Y=0}else{Y=25-(L>>>1)|0}L=C<<Y
Y=a[x>>2]|0
while(1){if((a[Y+4>>2]&-8|0)==(C|0)){break}O=Y+16+(L>>>31<<2)|0
x=a[O>>2]|0
if((x|0)==0){B=1120
break}else{L=L<<1
Y=x}}if((B|0)==1120){if(O>>>0<(a[212]|0)>>>0){Ae()}a[O>>2]=E
a[b+24>>2]=Y
a[b+12>>2]=b
a[b+8>>2]=b
return}O=Y+8|0
B=a[O>>2]|0
L=a[212]|0
if(Y>>>0<L>>>0){Ae()}if(B>>>0<L>>>0){Ae()}a[B+12>>2]=E
a[O>>2]=E
a[b+8>>2]=B
a[b+12>>2]=Y
a[b+24>>2]=0
return}function wt(e){e=e|0
var r=0,t=0,i=0
r=(e|0)==0?1:e
while(1){t=Dr(r)|0
if((t|0)!=0){i=1164
break}e=(L=a[328]|0,a[328]=L+0,L)
if((e|0)==0){break}xi[e&1]()}if((i|0)==1164){return t|0}t=Fe(4)|0
a[t>>2]=560
_e(t|0,688,6)
return 0}function mt(e,r){e=e|0
r=r|0
return wt(e)|0}function kt(e){e=e|0
return}function gt(e){e=e|0
return 360|0}function _t(e){e=e|0
return 448|0}function yt(e){e=e|0
return(L=a[328]|0,a[328]=e,L)|0}function At(e){e=e|0
a[e>>2]=560
return}function Et(e){e=e|0
a[e>>2]=592
return}function Mt(e){e=e|0
if((e|0)!=0){Xr(e)}return}function Nt(e,r){e=e|0
r=r|0
Mt(e)
return}function St(e){e=e|0
Mt(e)
return}function It(e,r){e=e|0
r=r|0
St(e)
return}function Rt(e){e=e|0
Mt(e)
return}function Tt(e){e=e|0
Mt(e)
return}function Ct(e,r,t){e=e|0
r=r|0
t=t|0
return xt(e,r,t,0,0,0)|0}function xt(e,r,t,n,o,s){e=e|0
r=r|0
t=t|0
n=n|0
o=o|0
s=s|0
var f=0,c=0,u=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0,F=0,U=0,P=0,z=0,j=0,V=0,D=0,X=0,Z=0,Q=0,H=0,G=0,J=0,W=0,$=0,K=0,ee=0,re=0,te=0,ie=0
f=l
if((t|0)==0){c=-1
l=f
return c|0}u=a[44]|0
if((u|0)==0){a[196]=1
a[44]=1
h=1
b=1
d=1190}else{p=a[196]|0
v=a[74]|0
if((v|0)==-1|(p|0)!=0){h=p
b=u
d=1190}else{w=v
m=p
k=u}}if((d|0)==1190){u=(De(344)|0)!=0|0
a[74]=u
w=u
m=h
k=b}b=i[t]|0
if(b<<24>>24==45){g=s|2
d=1194}else{h=(w|0)!=0|b<<24>>24==43?s&-2:s
if(b<<24>>24==43){g=h
d=1194}else{_=t
y=h}}if((d|0)==1194){_=t+1|0
y=g}a[198]=0
if((m|0)==0){A=k
d=1198}else{a[50]=-1
a[48]=-1
E=k
M=m
d=1197}while(1){if((d|0)==1197){d=0
if((M|0)==0){A=E
d=1198
continue}else{N=E}}else if((d|0)==1198){d=0
m=a[40]|0
if((i[m]|0)==0){N=A}else{I=m
R=A
break}}a[196]=0
if((N|0)>=(e|0)){d=1200
break}T=r+(N<<2)|0
C=a[T>>2]|0
a[40]=C
if((i[C]|0)==45){x=C+1|0
q=i[x]|0
if(q<<24>>24!=0){d=1232
break}if((Te(_|0,45)|0)!=0){d=1232
break}}a[40]=824
if((y&2|0)!=0){d=1217
break}if((y&1|0)==0){c=-1
d=1298
break}m=a[48]|0
do{if((m|0)==-1){a[48]=N
L=N
Y=0}else{k=a[50]|0
if((k|0)==-1){L=N
Y=0
break}g=k-m|0
t=N-k|0
h=(g|0)%(t|0)|0
if((h|0)==0){O=t}else{b=t
s=h
while(1){h=(b|0)%(s|0)|0
if((h|0)==0){O=s
break}else{b=s
s=h}}}s=(N-m|0)/(O|0)|0
do{if((O|0)>0){b=-g|0
if((s|0)>0){B=0}else{F=N
U=k
P=m
z=0
break}do{h=B+k|0
w=r+(h<<2)|0
u=0
p=h
h=a[w>>2]|0
while(1){v=((p|0)<(k|0)?t:b)+p|0
j=r+(v<<2)|0
V=a[j>>2]|0
a[j>>2]=h
a[w>>2]=V
j=u+1|0
if((j|0)<(s|0)){u=j
p=v
h=V}else{break}}B=B+1|0}while((B|0)<(O|0))
F=a[44]|0
U=a[50]|0
P=a[48]|0
z=a[196]|0}else{F=N
U=k
P=m
z=0}}while(0)
a[48]=F-U+P
a[50]=-1
L=F
Y=z}}while(0)
m=L+1|0
a[44]=m
E=m
M=Y
d=1197}do{if((d|0)==1298){l=f
return c|0}else if((d|0)==1232){Y=a[48]|0
M=a[50]|0
if((Y|0)!=-1&(M|0)==-1){a[50]=N
D=i[x]|0
X=N}else{D=q
X=M}if(D<<24>>24==0){I=C
R=N
break}a[40]=x
if((i[x]|0)!=45){I=x
R=N
break}if((i[C+2|0]|0)!=0){I=x
R=N
break}M=N+1|0
a[44]=M
a[40]=824
if((X|0)!=-1){E=X-Y|0
L=M-X|0
z=(E|0)%(L|0)|0
if((z|0)==0){Z=L}else{F=L
P=z
while(1){z=(F|0)%(P|0)|0
if((z|0)==0){Z=P
break}else{F=P
P=z}}}P=(M-Y|0)/(Z|0)|0
do{if((Z|0)>0){F=-E|0
if((P|0)>0){Q=0}else{H=X
G=Y
J=M
break}do{z=Q+X|0
U=r+(z<<2)|0
O=0
B=z
z=a[U>>2]|0
while(1){A=((B|0)<(X|0)?L:F)+B|0
m=r+(A<<2)|0
k=a[m>>2]|0
a[m>>2]=z
a[U>>2]=k
m=O+1|0
if((m|0)<(P|0)){O=m
B=A
z=k}else{break}}Q=Q+1|0}while((Q|0)<(Z|0))
H=a[50]|0
G=a[48]|0
J=a[44]|0}else{H=X
G=Y
J=M}}while(0)
a[44]=G-H+J}a[50]=-1
a[48]=-1
c=-1
l=f
return c|0}else if((d|0)==1200){a[40]=824
M=a[50]|0
Y=a[48]|0
do{if((M|0)==-1){if((Y|0)==-1){break}a[44]=Y}else{P=M-Y|0
L=N-M|0
E=(P|0)%(L|0)|0
if((E|0)==0){W=L}else{F=L
z=E
while(1){E=(F|0)%(z|0)|0
if((E|0)==0){W=z
break}else{F=z
z=E}}}z=(N-Y|0)/(W|0)|0
do{if((W|0)>0){F=-P|0
if((z|0)>0){$=0}else{K=M
ee=Y
re=N
break}do{E=$+M|0
B=r+(E<<2)|0
O=0
U=E
E=a[B>>2]|0
while(1){k=((U|0)<(M|0)?L:F)+U|0
A=r+(k<<2)|0
m=a[A>>2]|0
a[A>>2]=E
a[B>>2]=m
A=O+1|0
if((A|0)<(z|0)){O=A
U=k
E=m}else{break}}$=$+1|0}while(($|0)<(W|0))
K=a[50]|0
ee=a[48]|0
re=a[44]|0}else{K=M
ee=Y
re=N}}while(0)
a[44]=ee-K+re}}while(0)
a[50]=-1
a[48]=-1
c=-1
l=f
return c|0}else if((d|0)==1217){a[44]=N+1
a[198]=a[T>>2]
c=1
l=f
return c|0}}while(0)
T=(n|0)!=0
e:do{if(T){if((I|0)==(a[r+(R<<2)>>2]|0)){te=I
break}N=i[I]|0
do{if(N<<24>>24==45){a[40]=I+1
ie=0}else{if((y&4|0)==0){te=I
break e}if(N<<24>>24==58){ie=0
break}ie=(Te(_|0,N<<24>>24|0)|0)!=0|0}}while(0)
N=Ft(r,_,n,o,ie)|0
if((N|0)==-1){te=a[40]|0
break}a[40]=824
c=N
l=f
return c|0}else{te=I}}while(0)
I=te+1|0
a[40]=I
ie=i[te]|0
te=ie<<24>>24
if((ie<<24>>24|0)==45){if((i[I]|0)==0){d=1260}}else if((ie<<24>>24|0)==58){d=1263}else{d=1260}do{if((d|0)==1260){y=Te(_|0,te|0)|0
if((y|0)==0){if(ie<<24>>24!=45){d=1263
break}if((i[I]|0)==0){c=-1}else{break}l=f
return c|0}R=i[y+1|0]|0
if(T&ie<<24>>24==87&R<<24>>24==59){do{if((i[I]|0)==0){N=(a[44]|0)+1|0
a[44]=N
if((N|0)<(e|0)){a[40]=a[r+(N<<2)>>2]
break}a[40]=824
do{if((a[46]|0)!=0){if((i[_]|0)==58){break}Pt(48,(S=l,l=l+8|0,a[S>>2]=te,S)|0)}}while(0)
a[42]=te
c=(i[_]|0)==58?58:63
l=f
return c|0}}while(0)
N=Ft(r,_,n,o,0)|0
a[40]=824
c=N
l=f
return c|0}if(R<<24>>24!=58){if((i[I]|0)!=0){c=te
l=f
return c|0}a[44]=(a[44]|0)+1
c=te
l=f
return c|0}a[198]=0
do{if((i[I]|0)==0){if((i[y+2|0]|0)==58){break}N=(a[44]|0)+1|0
a[44]=N
if((N|0)<(e|0)){a[198]=a[r+(N<<2)>>2]
break}a[40]=824
do{if((a[46]|0)!=0){if((i[_]|0)==58){break}Pt(48,(S=l,l=l+8|0,a[S>>2]=te,S)|0)}}while(0)
a[42]=te
c=(i[_]|0)==58?58:63
l=f
return c|0}else{a[198]=I}}while(0)
a[40]=824
a[44]=(a[44]|0)+1
c=te
l=f
return c|0}}while(0)
do{if((d|0)==1263){if((i[I]|0)!=0){break}a[44]=(a[44]|0)+1}}while(0)
do{if((a[46]|0)!=0){if((i[_]|0)==58){break}Pt(272,(S=l,l=l+8|0,a[S>>2]=te,S)|0)}}while(0)
a[42]=te
c=63
l=f
return c|0}function qt(e,r,t,i,n){e=e|0
r=r|0
t=t|0
i=i|0
n=n|0
return xt(e,r,t,i,n,1)|0}function Lt(e,r,t,i,n){e=e|0
r=r|0
t=t|0
i=i|0
n=n|0
return xt(e,r,t,i,n,5)|0}function Yt(e){e=e|0
return wt(e)|0}function Ot(e,r){e=e|0
r=r|0
return Yt(e)|0}function Bt(){var e=0
e=Fe(4)|0
a[e>>2]=560
_e(e|0,688,6)}function Ft(e,r,t,n,o){e=e|0
r=r|0
t=t|0
n=n|0
o=o|0
var s=0,f=0,c=0,u=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0
s=l
f=a[40]|0
c=a[44]|0
u=c+1|0
a[44]=u
h=Te(f|0,61)|0
if((h|0)==0){b=ri(f|0)|0
d=0}else{b=h-f|0
d=h+1|0}h=a[t>>2]|0
e:do{if((h|0)!=0){r:do{if((o|0)!=0&(b|0)==1){p=0
v=h
while(1){if((i[f]|0)==(i[v]|0)){if((ri(v|0)|0)==1){w=p
break r}}p=p+1|0
v=a[t+(p<<4)>>2]|0
if((v|0)==0){break e}}}else{v=0
p=-1
m=h
while(1){if((me(f|0,m|0,b|0)|0)==0){if((ri(m|0)|0)==(b|0)){w=v
break r}if((p|0)==-1){k=v}else{break}}else{k=p}g=v+1|0
_=a[t+(g<<4)>>2]|0
if((_|0)==0){w=k
break r}else{v=g
p=k
m=_}}do{if((a[46]|0)!=0){if((i[r]|0)==58){break}Pt(304,(S=l,l=l+16|0,a[S>>2]=b,a[S+8>>2]=f,S)|0)}}while(0)
a[42]=0
y=63
l=s
return y|0}}while(0)
if((w|0)==-1){break}m=t+(w<<4)+4|0
p=a[m>>2]|0
v=(d|0)==0
if(!((p|0)!=0|v)){do{if((a[46]|0)!=0){if((i[r]|0)==58){break}Pt(208,(S=l,l=l+16|0,a[S>>2]=b,a[S+8>>2]=f,S)|0)}}while(0)
if((a[t+(w<<4)+8>>2]|0)==0){A=a[t+(w<<4)+12>>2]|0}else{A=0}a[42]=A
y=(i[r]|0)==58?58:63
l=s
return y|0}do{if((p-1|0)>>>0<2){if(!v){a[198]=d
break}if((p|0)!=1){break}a[44]=c+2
a[198]=a[e+(u<<2)>>2]}}while(0)
if(!((a[m>>2]|0)==1&(a[198]|0)==0)){if((n|0)!=0){a[n>>2]=w}p=a[t+(w<<4)+8>>2]|0
v=a[t+(w<<4)+12>>2]|0
if((p|0)==0){y=v
l=s
return y|0}a[p>>2]=v
y=0
l=s
return y|0}do{if((a[46]|0)!=0){if((i[r]|0)==58){break}Pt(8,(S=l,l=l+8|0,a[S>>2]=f,S)|0)}}while(0)
if((a[t+(w<<4)+8>>2]|0)==0){E=a[t+(w<<4)+12>>2]|0}else{E=0}a[42]=E
a[44]=(a[44]|0)-1
y=(i[r]|0)==58?58:63
l=s
return y|0}}while(0)
if((o|0)!=0){a[44]=c
y=-1
l=s
return y|0}do{if((a[46]|0)!=0){if((i[r]|0)==58){break}Pt(248,(S=l,l=l+8|0,a[S>>2]=f,S)|0)}}while(0)
a[42]=0
y=63
l=s
return y|0}function Ut(e,r){e=e|0
r=r|0
var t=0,i=0,n=0
t=l
l=l+16|0
i=t|0
n=i
a[n>>2]=r
a[n+4>>2]=0
zt(e,i|0)
l=t
return}function Pt(e,r){e=e|0
r=r|0
var t=0,i=0,n=0
t=l
l=l+16|0
i=t|0
n=i
a[n>>2]=r
a[n+4>>2]=0
jt(e,i|0)
l=t
return}function zt(e,r){e=e|0
r=r|0
var t=0,i=0,n=0
t=l
i=a[($e()|0)>>2]|0
n=a[g>>2]|0
Ee(a[w>>2]|0,432,(S=l,l=l+8|0,a[S>>2]=n,S)|0)|0
if((e|0)!=0){n=a[w>>2]|0
Xe(n|0,e|0,r|0)|0
r=a[w>>2]|0
qe(472,2,1,r|0)|0}r=a[w>>2]|0
e=ye(i|0)|0
Ee(r|0,384,(S=l,l=l+8|0,a[S>>2]=e,S)|0)|0
l=t
return}function jt(e,r){e=e|0
r=r|0
var t=0,i=0
t=l
i=a[g>>2]|0
Ee(a[w>>2]|0,376,(S=l,l=l+8|0,a[S>>2]=i,S)|0)|0
if((e|0)!=0){i=a[w>>2]|0
Xe(i|0,e|0,r|0)|0}Ce(10,a[w>>2]|0)|0
l=t
return}function Vt(e,r){e=e|0
r=r|0
var t=0,n=0,o=0,s=0,f=0,c=0,l=0,h=0,b=0,d=0,p=0,v=0.0,w=0,m=0,k=0,g=0,_=0.0,y=0,A=0,E=0,M=0.0,N=0.0,S=0,I=0,R=0,T=0.0,C=0,x=0,q=0,L=0,Y=0,O=0,B=0,F=0,U=0.0,P=0,z=0,j=0.0,V=0.0,D=0.0
t=e
while(1){n=t+1|0
if((Ue(i[t]|0)|0)==0){break}else{t=n}}o=i[t]|0
if((o<<24>>24|0)==45){s=n
f=1}else if((o<<24>>24|0)==43){s=n
f=0}else{s=t
f=0}t=-1
n=0
o=s
while(1){c=i[o]|0
if(((c<<24>>24)-48|0)>>>0<10){l=t}else{if(c<<24>>24!=46|(t|0)>-1){break}else{l=n}}t=l
n=n+1|0
o=o+1|0}l=o+(-n|0)|0
s=(t|0)<0
h=((s^1)<<31>>31)+n|0
b=(h|0)>18
d=(b?-18:-h|0)+(s?n:t)|0
t=b?18:h
do{if((t|0)==0){p=e
v=0.0}else{if((t|0)>9){h=l
b=t
n=0
while(1){s=i[h]|0
w=h+1|0
if(s<<24>>24==46){m=i[w]|0
k=h+2|0}else{m=s
k=w}g=(n*10|0)-48+(m<<24>>24)|0
w=b-1|0
if((w|0)>9){h=k
b=w
n=g}else{break}}_=+(g|0)*1.0e9
y=9
A=k
E=1393}else{if((t|0)>0){_=0.0
y=t
A=l
E=1393}else{M=0.0
N=0.0}}if((E|0)==1393){n=A
b=y
h=0
while(1){w=i[n]|0
s=n+1|0
if(w<<24>>24==46){S=i[s]|0
I=n+2|0}else{S=w
I=s}R=(h*10|0)-48+(S<<24>>24)|0
s=b-1|0
if((s|0)>0){n=I
b=s
h=R}else{break}}M=+(R|0)
N=_}T=N+M
do{if((c<<24>>24|0)==69|(c<<24>>24|0)==101){h=o+1|0
b=i[h]|0
if((b<<24>>24|0)==43){C=o+2|0
x=0}else if((b<<24>>24|0)==45){C=o+2|0
x=1}else{C=h
x=0}h=i[C]|0
if(((h<<24>>24)-48|0)>>>0<10){q=C
L=0
Y=h}else{O=0
B=C
F=x
break}while(1){h=(L*10|0)-48+(Y<<24>>24)|0
b=q+1|0
n=i[b]|0
if(((n<<24>>24)-48|0)>>>0<10){q=b
L=h
Y=n}else{O=h
B=b
F=x
break}}}else{O=0
B=o
F=0}}while(0)
b=d+((F|0)==0?O:-O|0)|0
h=(b|0)<0?-b|0:b
if((h|0)>511){a[($e()|0)>>2]=34
U=1.0
P=88
z=511
E=1410}else{if((h|0)==0){j=1.0}else{U=1.0
P=88
z=h
E=1410}}if((E|0)==1410){while(1){E=0
if((z&1|0)==0){V=U}else{V=U*+u[P>>3]}h=z>>1
if((h|0)==0){j=V
break}else{U=V
P=P+8|0
z=h
E=1410}}}if((b|0)>-1){p=B
v=T*j
break}else{p=B
v=T/j
break}}}while(0)
if((r|0)!=0){a[r>>2]=p}if((f|0)==0){D=v
return+D}D=-0.0-v
return+D}function Dt(e,r){e=e|0
r=r|0
return+ +Vt(e,r)}function Xt(e,r){e=e|0
r=r|0
return+ +Vt(e,r)}function Zt(e,r,t){e=e|0
r=r|0
t=t|0
return+ +Vt(e,r)}function Qt(e,r,t){e=e|0
r=r|0
t=t|0
return+ +Vt(e,r)}function Ht(e){e=e|0
return+ +Vt(e,0)}function Gt(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0
i=l
l=l+16|0
n=i|0
i=n
a[i>>2]=t
a[i+4>>2]=0
Wt(e,r,n|0)}function Jt(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0
i=l
l=l+16|0
n=i|0
i=n
a[i>>2]=t
a[i+4>>2]=0
$t(e,r,n|0)}function Wt(e,r,t){e=e|0
r=r|0
t=t|0
var i=0,n=0
i=a[($e()|0)>>2]|0
n=a[g>>2]|0
Ee(a[w>>2]|0,336,(S=l,l=l+8|0,a[S>>2]=n,S)|0)|0
if((r|0)!=0){n=a[w>>2]|0
Xe(n|0,r|0,t|0)|0
t=a[w>>2]|0
qe(480,2,1,t|0)|0}t=a[w>>2]|0
r=ye(i|0)|0
Ee(t|0,392,(S=l,l=l+8|0,a[S>>2]=r,S)|0)|0
Oe(e|0)}function $t(e,r,t){e=e|0
r=r|0
t=t|0
var i=0
i=a[g>>2]|0
Ee(a[w>>2]|0,440,(S=l,l=l+8|0,a[S>>2]=i,S)|0)|0
if((r|0)!=0){i=a[w>>2]|0
Xe(i|0,r|0,t|0)|0}Ce(10,a[w>>2]|0)|0
Oe(e|0)}function Kt(e,r,t){e=e|0
r=r|0
t=t|0
var n=0
n=e|0
if((e&3)==(r&3)){while(e&3){if((t|0)==0)return n|0
i[e]=i[r]|0
e=e+1|0
r=r+1|0
t=t-1|0}while((t|0)>=4){a[e>>2]=a[r>>2]
e=e+4|0
r=r+4|0
t=t-4|0}}while((t|0)>0){i[e]=i[r]|0
e=e+1|0
r=r+1|0
t=t-1|0}return n|0}function ei(e,r,t){e=e|0
r=r|0
t=t|0
var n=0,o=0,s=0
n=e+t|0
if((t|0)>=20){r=r&255
t=e&3
o=r|r<<8|r<<16|r<<24
s=n&~3
if(t){t=e+4-t|0
while((e|0)<(t|0)){i[e]=r
e=e+1|0}}while((e|0)<(s|0)){a[e>>2]=o
e=e+4|0}}while((e|0)<(n|0)){i[e]=r
e=e+1|0}}function ri(e){e=e|0
var r=0
r=e
while(i[r]|0){r=r+1|0}return r-e|0}function ti(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0
n=e+t>>>0
return(O=r+i+(n>>>0<e>>>0|0)>>>0,n|0)|0}function ii(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0
n=r-i>>>0
n=r-i-(t>>>0>e>>>0|0)>>>0
return(O=n,e-t>>>0|0)|0}function ni(e,r,t){e=e|0
r=r|0
t=t|0
if((t|0)<32){O=r<<t|(e&(1<<t)-1<<32-t)>>>32-t
return e<<t}O=e<<t-32
return 0}function ai(e,r,t){e=e|0
r=r|0
t=t|0
if((t|0)<32){O=r>>>t
return e>>>t|(r&(1<<t)-1)<<32-t}O=0
return r>>>t-32|0}function oi(e,r,t){e=e|0
r=r|0
t=t|0
if((t|0)<32){O=r>>t
return e>>>t|(r&(1<<t)-1)<<32-t}O=(r|0)<0?-1:0
return r>>t-32|0}function si(e){e=e|0
var r=0
r=i[v+(e>>>24)|0]|0
if((r|0)<8)return r|0
r=i[v+(e>>16&255)|0]|0
if((r|0)<8)return r+8|0
r=i[v+(e>>8&255)|0]|0
if((r|0)<8)return r+16|0
return(i[v+(e&255)|0]|0)+24|0}function fi(e){e=e|0
var r=0
r=i[p+(e&255)|0]|0
if((r|0)<8)return r|0
r=i[p+(e>>8&255)|0]|0
if((r|0)<8)return r+8|0
r=i[p+(e>>16&255)|0]|0
if((r|0)<8)return r+16|0
return(i[p+(e>>>24)|0]|0)+24|0}function ci(e,r){e=e|0
r=r|0
var t=0,i=0,n=0,a=0
t=e&65535
i=r&65535
n=oe(i,t)|0
a=e>>>16
e=(n>>>16)+(oe(i,a)|0)|0
i=r>>>16
r=oe(i,t)|0
return(O=(e>>>16)+(oe(i,a)|0)+(((e&65535)+r|0)>>>16)|0,e+r<<16|n&65535|0)|0}function ui(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0,a=0,o=0,s=0,f=0
n=r>>31|((r|0)<0?-1:0)<<1
a=((r|0)<0?-1:0)>>31|((r|0)<0?-1:0)<<1
o=i>>31|((i|0)<0?-1:0)<<1
s=((i|0)<0?-1:0)>>31|((i|0)<0?-1:0)<<1
f=ii(n^e,a^r,n,a)|0
r=O
e=o^n
n=s^a
a=ii((pi(f,r,ii(o^t,s^i,o,s)|0,O,0)|0)^e,O^n,e,n)|0
return(O=O,a)|0}function li(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0,o=0,s=0,f=0,c=0,u=0,h=0
n=l
l=l+8|0
o=n|0
s=r>>31|((r|0)<0?-1:0)<<1
f=((r|0)<0?-1:0)>>31|((r|0)<0?-1:0)<<1
c=i>>31|((i|0)<0?-1:0)<<1
u=((i|0)<0?-1:0)>>31|((i|0)<0?-1:0)<<1
h=ii(s^e,f^r,s,f)|0
r=O
e=ii(c^t,u^i,c,u)|0
pi(h,r,e,O,o)|0
e=ii(a[o>>2]^s,a[o+4>>2]^f,s,f)|0
f=O
l=n
return(O=f,e)|0}function hi(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0,a=0
n=e
e=t
t=ci(n,e)|0
a=O
return(O=(oe(r,e)|0)+(oe(i,n)|0)+a|a&0,t|0|0)|0}function bi(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0
n=pi(e,r,t,i,0)|0
return(O=O,n)|0}function di(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
var n=0,o=0
n=l
l=l+8|0
o=n|0
pi(e,r,t,i,o)|0
l=n
return(O=a[o+4>>2]|0,a[o>>2]|0)|0}function pi(e,r,t,i,n){e=e|0
r=r|0
t=t|0
i=i|0
n=n|0
var o=0,s=0,f=0,c=0,u=0,l=0,h=0,b=0,d=0,p=0,v=0,w=0,m=0,k=0,g=0,_=0,y=0,A=0,E=0,M=0,N=0,S=0,I=0,R=0,T=0,C=0,x=0,q=0,L=0,Y=0,B=0,F=0
o=e
s=r
f=s
c=t
u=i
l=u
if((f|0)==0){h=(n|0)!=0
if((l|0)==0){if(h){a[n>>2]=(o>>>0)%(c>>>0)
a[n+4>>2]=0}b=0
d=(o>>>0)/(c>>>0)>>>0
return(O=b,d)|0}else{if(!h){b=0
d=0
return(O=b,d)|0}a[n>>2]=e|0
a[n+4>>2]=r&0
b=0
d=0
return(O=b,d)|0}}h=(l|0)==0
do{if((c|0)==0){if(h){if((n|0)!=0){a[n>>2]=(f>>>0)%(c>>>0)
a[n+4>>2]=0}b=0
d=(f>>>0)/(c>>>0)>>>0
return(O=b,d)|0}if((o|0)==0){if((n|0)!=0){a[n>>2]=0
a[n+4>>2]=(f>>>0)%(l>>>0)}b=0
d=(f>>>0)/(l>>>0)>>>0
return(O=b,d)|0}p=l-1|0
if((p&l|0)==0){if((n|0)!=0){a[n>>2]=e|0
a[n+4>>2]=p&f|r&0}b=0
d=f>>>((fi(l|0)|0)>>>0)
return(O=b,d)|0}p=(si(l|0)|0)-(si(f|0)|0)|0
if(p>>>0<=30){v=p+1|0
w=31-p|0
m=v
k=f<<w|o>>>(v>>>0)
g=f>>>(v>>>0)
_=0
y=o<<w
break}if((n|0)==0){b=0
d=0
return(O=b,d)|0}a[n>>2]=e|0
a[n+4>>2]=s|r&0
b=0
d=0
return(O=b,d)|0}else{if(!h){w=(si(l|0)|0)-(si(f|0)|0)|0
if(w>>>0<=31){v=w+1|0
p=31-w|0
A=w-31>>31
m=v
k=o>>>(v>>>0)&A|f<<p
g=f>>>(v>>>0)&A
_=0
y=o<<p
break}if((n|0)==0){b=0
d=0
return(O=b,d)|0}a[n>>2]=e|0
a[n+4>>2]=s|r&0
b=0
d=0
return(O=b,d)|0}p=c-1|0
if((p&c|0)!=0){A=(si(c|0)|0)+33-(si(f|0)|0)|0
v=64-A|0
w=32-A|0
E=w>>31
M=A-32|0
N=M>>31
m=A
k=w-1>>31&f>>>(M>>>0)|(f<<w|o>>>(A>>>0))&N
g=N&f>>>(A>>>0)
_=o<<v&E
y=(f<<v|o>>>(M>>>0))&E|o<<w&A-33>>31
break}if((n|0)!=0){a[n>>2]=p&o
a[n+4>>2]=0}if((c|0)==1){b=s|r&0
d=e|0|0
return(O=b,d)|0}else{p=fi(c|0)|0
b=f>>>(p>>>0)|0
d=f<<32-p|o>>>(p>>>0)|0
return(O=b,d)|0}}}while(0)
if((m|0)==0){S=y
I=_
R=g
T=k
C=0
x=0}else{o=t|0|0
t=u|i&0
i=ti(o,t,-1,-1)|0
u=O
f=y
y=_
_=g
g=k
k=m
m=0
while(1){q=y>>>31|f<<1
L=m|y<<1
c=g<<1|f>>>31|0
e=g>>>31|_<<1|0
ii(i,u,c,e)|0
r=O
s=r>>31|((r|0)<0?-1:0)<<1
Y=s&1
B=ii(c,e,s&o,(((r|0)<0?-1:0)>>31|((r|0)<0?-1:0)<<1)&t)|0
F=O
r=k-1|0
if((r|0)==0){break}else{f=q
y=L
_=F
g=B
k=r
m=Y}}S=q
I=L
R=F
T=B
C=0
x=Y}Y=I
I=0
if((n|0)!=0){a[n>>2]=T
a[n+4>>2]=R}b=(Y|0)>>>31|(S|I)<<1|(I<<1|Y>>>31)&0|C
d=(Y<<1|0>>>31)&-2|x
return(O=b,d)|0}function vi(e,r){e=e|0
r=r|0
Ii[e&15](r|0)}function wi(e,r,t){e=e|0
r=r|0
t=t|0
Ri[e&15](r|0,t|0)}function mi(e,r){e=e|0
r=r|0
return Ti[e&7](r|0)|0}function ki(e,r,t,i){e=e|0
r=r|0
t=t|0
i=i|0
Ci[e&15](r|0,t|0,i|0)}function gi(e){e=e|0
xi[e&1]()}function _i(e,r,t){e=e|0
r=r|0
t=t|0
return qi[e&1](r|0,t|0)|0}function yi(e){e=e|0
se(0)}function Ai(e,r){e=e|0
r=r|0
se(1)}function Ei(e){e=e|0
se(2)
return 0}function Mi(e,r,t){e=e|0
r=r|0
t=t|0
se(3)}function Ni(){se(4)}function Si(e,r){e=e|0
r=r|0
se(5)
return 0}var Ii=[yi,yi,Et,yi,Tt,yi,kt,yi,At,yi,Rt,yi,yi,yi,yi,yi]
var Ri=[Ai,Ai,Ut,Ai,zt,Ai,Pt,Ai,jt,Ai,Ai,Ai,Ai,Ai,Ai,Ai]
var Ti=[Ei,Ei,gt,Ei,_t,Ei,Ei,Ei]
var Ci=[Mi,Mi,$t,Mi,Wt,Mi,Gt,Mi,Jt,Mi,Mi,Mi,Mi,Mi,Mi,Mi]
var xi=[Ni,Ni]
var qi=[Si,Si]
return{_crypto_scrypt:Sr,_strlen:ri,_free:Xr,_realloc:Qr,_memset:ei,_malloc:Dr,_memcpy:Kt,_calloc:Zr,runPostSets:gr,stackAlloc:nr,stackSave:ar,stackRestore:or,setThrew:sr,setTempRet0:ur,setTempRet1:lr,setTempRet2:hr,setTempRet3:br,setTempRet4:dr,setTempRet5:pr,setTempRet6:vr,setTempRet7:wr,setTempRet8:mr,setTempRet9:kr,dynCall_vi:vi,dynCall_vii:wi,dynCall_ii:mi,dynCall_viii:ki,dynCall_v:gi,dynCall_iii:_i}}({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:wa,assert:w,asmPrintInt:function(e,r){s.print("int "+e+","+r)},asmPrintFloat:function(e,r){s.print("float "+e+","+r)},min:Xc,invoke_vi:function(e,r){try{s.dynCall_vi(e,r)}catch(t){"number"!=typeof t&&"longjmp"!==t&&g(t),V.setThrew(1,0)}},invoke_vii:function(e,r,t){try{s.dynCall_vii(e,r,t)}catch(i){"number"!=typeof i&&"longjmp"!==i&&g(i),V.setThrew(1,0)}},invoke_ii:function(e,r){try{return s.dynCall_ii(e,r)}catch(t){"number"!=typeof t&&"longjmp"!==t&&g(t),V.setThrew(1,0)}},invoke_viii:function(e,r,t,i){try{s.dynCall_viii(e,r,t,i)}catch(n){"number"!=typeof n&&"longjmp"!==n&&g(n),V.setThrew(1,0)}},invoke_v:function(e){try{s.dynCall_v(e)}catch(r){"number"!=typeof r&&"longjmp"!==r&&g(r),V.setThrew(1,0)}},invoke_iii:function(e,r,t){try{return s.dynCall_iii(e,r,t)}catch(i){"number"!=typeof i&&"longjmp"!==i&&g(i),V.setThrew(1,0)}},_strncmp:function(e,r,t){for(var i=0;t>i;){var n=G[e+i|0],a=G[r+i|0]
if(n==a&&0==n)break
if(0==n)return-1
if(0==a)return 1
if(n!=a)return n>a?1:-1
i++}return 0},_llvm_va_end:aa(),_sysconf:function(e){switch(e){case 8:return 4096
case 54:case 56:case 21:case 61:case 63:case 22:case 67:case 23:case 24:case 25:case 26:case 27:case 69:case 28:case 101:case 70:case 71:case 29:case 30:case 199:case 75:case 76:case 32:case 43:case 44:case 80:case 46:case 47:case 45:case 48:case 49:case 42:case 82:case 33:case 7:case 108:case 109:case 107:case 112:case 119:case 121:return 200809
case 13:case 104:case 94:case 95:case 34:case 35:case 77:case 81:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 94:case 95:case 110:case 111:case 113:case 114:case 115:case 116:case 117:case 118:case 120:case 40:case 16:case 79:case 19:return-1
case 92:case 93:case 5:case 72:case 6:case 74:case 92:case 93:case 96:case 97:case 98:case 99:case 102:case 103:case 105:return 1
case 38:case 66:case 50:case 51:case 4:return 1024
case 15:case 64:case 41:return 32
case 55:case 37:case 17:return 2147483647
case 18:case 1:return 47839
case 59:case 57:return 99
case 68:case 58:return 2048
case 0:return 2097152
case 3:return 65536
case 14:return 32768
case 73:return 32767
case 39:return 16384
case 60:return 1e3
case 106:return 700
case 52:return 256
case 62:return 255
case 2:return 100
case 65:return 64
case 36:return 20
case 100:return 16
case 20:return 6
case 53:return 4
case 10:return 1}return M(N.A),-1},___cxa_throw:rc,_strerror:zc,_abort:function(){s.abort()},_fprintf:mc,_llvm_eh_exception:U,___cxa_free_exception:sc,_fflush:aa(),___buildEnvironment:wc,__reallyNegative:jc,_strchr:function(e,r){e--
do{e++
var t=A[e]
if(t==r)return e}while(t)
return 0},_fputc:Bc,___setErrNo:M,_fwrite:hc,_send:fc,_write:gc,_exit:function(e){Ac(e)},___cxa_find_matching_catch:function(e,r){-1==e&&(e=B[U.m>>2]),-1==r&&(r=B[U.m+4>>2])
var t=Array.prototype.slice.call(arguments,2)
0!=r&&!pc(r)&&0==B[B[r>>2]-8>>2]&&(e=B[e>>2])
for(var i=0;i<t.length;i++)if(qc(t[i],r,e))return 0|(V.setTempRet0(t[i]),e)
return 0|(V.setTempRet0(r),e)},___cxa_allocate_exception:function(e){return Oa(e)},_isspace:function(e){return 32==e||e>=9&&13>=e},__formatString:kc,___resumeException:function(e){0==B[U.m>>2]&&(B[U.m>>2]=e),g(e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")},_llvm_uadd_with_overflow_i32:function(e,r){return e>>>=0,r>>>=0,0|(V.setTempRet0(e+r>4294967295),e+r>>>0)},___cxa_does_inherit:qc,_getenv:xc,_vfprintf:function(e,r,t){return mc(e,r,B[t>>2])},___cxa_begin_catch:function(e){return oc.ta--,e},__ZSt18uncaught_exceptionv:oc,_pwrite:function(e,r,t,i){if(e=R[e],!e)return M(N.$),-1
try{return Ib(e,A,r,t,i)}catch(n){return Zb(n),-1}},___cxa_call_unexpected:function(e){s.P("Unexpected exception thrown, this is not properly supported - aborting"),za=l,g(e)},_sbrk:nc,_strerror_r:yc,___errno_location:function(){return rb},___gxx_personality_v0:aa(),___cxa_is_number_type:pc,_time:function(e){var r=Math.floor(Date.now()/1e3)
return e&&(B[e>>2]=r),r},__exit:Ac,___cxa_end_catch:uc,STACKTOP:u,STACK_MAX:Ta,tempDoublePtr:qb,ABORT:za,cttz_i8:Wc,ctlz_i8:Vc,NaN:NaN,Infinity:1/0,_stderr:nb,__ZTVN10__cxxabiv120__si_class_type_infoE:ob,__ZTVN10__cxxabiv117__class_type_infoE:pb,___progname:k},I)
s._crypto_scrypt=V._crypto_scrypt
var ic=s._strlen=V._strlen,tc=s._free=V._free
s._realloc=V._realloc
var tb=s._memset=V._memset,Oa=s._malloc=V._malloc,sb=s._memcpy=V._memcpy
s._calloc=V._calloc
var mb=s.runPostSets=V.runPostSets
s.dynCall_vi=V.dynCall_vi,s.dynCall_vii=V.dynCall_vii,s.dynCall_ii=V.dynCall_ii,s.dynCall_viii=V.dynCall_viii,s.dynCall_v=V.dynCall_v,s.dynCall_iii=V.dynCall_iii
var qa=function(e){return V.stackAlloc(e)},ja=function(){return V.stackSave()},ka=function(e){V.stackRestore(e)},lc
Y.Ca={},Y.D=function(e){if(e>=-128&&128>e){var r=Y.Ca[e]
if(r)return r}return r=new Y(0|e,0>e?-1:0),e>=-128&&128>e&&(Y.Ca[e]=r),r},Y.p=function(e){return isNaN(e)||!isFinite(e)?Y.ZERO:e<=-Y.Ea?Y.MIN_VALUE:e+1>=Y.Ea?Y.MAX_VALUE:0>e?Y.p(-e).i():new Y(e%Y.B|0,e/Y.B|0)},Y.v=function(e,r){return new Y(e,r)},Y.k=function(e,r){0==e.length&&g(Error("number format error: empty string"))
var t=r||10
if((2>t||t>36)&&g(Error("radix out of range: "+t)),"-"==e.charAt(0))return Y.k(e.substring(1),t).i()
0<=e.indexOf("-")&&g(Error('number format error: interior "-" character: '+e))
for(var i=Y.p(Math.pow(t,8)),n=Y.ZERO,a=0;a<e.length;a+=8){var o=Math.min(8,e.length-a),s=parseInt(e.substring(a,a+o),t)
8>o?(o=Y.p(Math.pow(t,o)),n=n.multiply(o).add(Y.p(s))):(n=n.multiply(i),n=n.add(Y.p(s)))}return n},Y.ea=65536,Y.Od=16777216,Y.B=Y.ea*Y.ea,Y.Pd=Y.B/2,Y.Qd=Y.B*Y.ea,Y.eb=Y.B*Y.B,Y.Ea=Y.eb/2,Y.ZERO=Y.D(0),Y.ONE=Y.D(1),Y.Da=Y.D(-1),Y.MAX_VALUE=Y.v(-1,2147483647),Y.MIN_VALUE=Y.v(0,-2147483648),Y.cb=Y.D(16777216),q=Y.prototype,q.Z=function(){return this.j*Y.B+this.ob()},q.toString=function(e){if(e=e||10,(2>e||e>36)&&g(Error("radix out of range: "+e)),this.G())return"0"
if(this.n()){if(this.o(Y.MIN_VALUE)){var r=Y.p(e),t=this.F(r),r=t.multiply(r).R(this)
return t.toString(e)+r.h.toString(e)}return"-"+this.i().toString(e)}for(var t=Y.p(Math.pow(e,6)),r=this,i="";;){var n=r.F(t),a=r.R(n.multiply(t)).h.toString(e),r=n
if(r.G())return a+i
for(;6>a.length;)a="0"+a
i=""+a+i}},q.ob=function(){return 0<=this.h?this.h:Y.B+this.h},q.G=function(){return 0==this.j&&0==this.h},q.n=function(){return 0>this.j},q.Pa=function(){return 1==(1&this.h)},q.o=function(e){return this.j==e.j&&this.h==e.h},q.Ra=function(){return 0>this.ja(Y.cb)},q.qb=function(e){return 0<this.ja(e)},q.rb=function(e){return 0<=this.ja(e)},q.ja=function(e){if(this.o(e))return 0
var r=this.n(),t=e.n()
return r&&!t?-1:!r&&t?1:this.R(e).n()?-1:1},q.i=function(){return this.o(Y.MIN_VALUE)?Y.MIN_VALUE:this.xb().add(Y.ONE)},q.add=function(e){var r,t=this.j>>>16,i=65535&this.j,n=this.h>>>16,a=e.j>>>16,o=65535&e.j,s=e.h>>>16
return r=0+((65535&this.h)+(65535&e.h)),e=0+(r>>>16),e+=n+s,n=0+(e>>>16),n+=i+o,i=0+(n>>>16),i=i+(t+a)&65535,Y.v((65535&e)<<16|65535&r,i<<16|65535&n)},q.R=function(e){return this.add(e.i())},q.multiply=function(e){if(this.G()||e.G())return Y.ZERO
if(this.o(Y.MIN_VALUE))return e.Pa()?Y.MIN_VALUE:Y.ZERO
if(e.o(Y.MIN_VALUE))return this.Pa()?Y.MIN_VALUE:Y.ZERO
if(this.n())return e.n()?this.i().multiply(e.i()):this.i().multiply(e).i()
if(e.n())return this.multiply(e.i()).i()
if(this.Ra()&&e.Ra())return Y.p(this.Z()*e.Z())
var r,t,i,n,a=this.j>>>16,o=65535&this.j,s=this.h>>>16,f=65535&this.h,c=e.j>>>16,u=65535&e.j,l=e.h>>>16,e=65535&e.h
return n=0+f*e,i=0+(n>>>16),i+=s*e,t=0+(i>>>16),i=(65535&i)+f*l,t+=i>>>16,i&=65535,t+=o*e,r=0+(t>>>16),t=(65535&t)+s*l,r+=t>>>16,t&=65535,t+=f*u,r+=t>>>16,t&=65535,r=r+(a*e+o*l+s*u+f*c)&65535,Y.v(i<<16|65535&n,r<<16|t)},q.F=function(e){if(e.G()&&g(Error("division by zero")),this.G())return Y.ZERO
if(this.o(Y.MIN_VALUE)){if(e.o(Y.ONE)||e.o(Y.Da))return Y.MIN_VALUE
if(e.o(Y.MIN_VALUE))return Y.ONE
var r=this.Db().F(e).shiftLeft(1)
if(r.o(Y.ZERO))return e.n()?Y.ONE:Y.Da
var t=this.R(e.multiply(r))
return r.add(t.F(e))}if(e.o(Y.MIN_VALUE))return Y.ZERO
if(this.n())return e.n()?this.i().F(e.i()):this.i().F(e).i()
if(e.n())return this.F(e.i()).i()
for(var i=Y.ZERO,t=this;t.rb(e);){for(var r=Math.max(1,Math.floor(t.Z()/e.Z())),n=Math.ceil(Math.log(r)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),a=Y.p(r),o=a.multiply(e);o.n()||o.qb(t);)r-=n,a=Y.p(r),o=a.multiply(e)
a.G()&&(a=Y.ONE),i=i.add(a),t=t.R(o)}return i},q.xb=function(){return Y.v(~this.h,~this.j)},q.shiftLeft=function(e){if(e&=63,0==e)return this
var r=this.h
return 32>e?Y.v(r<<e,this.j<<e|r>>>32-e):Y.v(0,r<<e-32)},q.Db=function(){var e
if(e=1,0==e)return this
var r=this.j
return 32>e?Y.v(this.h>>>e|r<<32-e,r>>e):Y.v(r>>e-32,r>=0?0:-1)},q=X.prototype,q.ga=function(e,r,t,i){for(var n=0,a=0;0<=--i;){var o=e*this[n++]+r[t]+a,a=Math.floor(o/67108864)
r[t++]=67108863&o}return a},q.f=26,q.u=67108863,q.K=67108864,q.bb=Math.pow(2,52),q.Aa=26,q.Ba=0
var $c=[],bd,Z
for(bd=48,Z=0;9>=Z;++Z)$c[bd++]=Z
for(bd=97,Z=10;36>Z;++Z)$c[bd++]=Z
for(bd=65,Z=10;36>Z;++Z)$c[bd++]=Z
q=X.prototype,q.copyTo=function(e){for(var r=this.b-1;r>=0;--r)e[r]=this[r]
e.b=this.b,e.c=this.c},q.D=function(e){this.b=1,this.c=0>e?-1:0,e>0?this[0]=e:-1>e?this[0]=e+DV:this.b=0},q.k=function(e,r){var t
if(16==r)t=4
else if(8==r)t=3
else if(256==r)t=8
else if(2==r)t=1
else if(32==r)t=5
else{if(4!=r)return void this.nb(e,r)
t=2}this.c=this.b=0
for(var i=e.length,n=p,a=0;0<=--i;){var o=8==t?255&e[i]:Zc(e,i)
0>o?"-"==e.charAt(i)&&(n=l):(n=p,0==a?this[this.b++]=o:a+t>this.f?(this[this.b-1]|=(o&(1<<this.f-a)-1)<<a,this[this.b++]=o>>this.f-a):this[this.b-1]|=o<<a,a+=t,a>=this.f&&(a-=this.f))}8==t&&0!=(128&e[0])&&(this.c=-1,a>0&&(this[this.b-1]|=(1<<this.f-a)-1<<a)),this.C(),n&&X.ZERO.t(this,this)},q.C=function(){for(var e=this.c&this.u;0<this.b&&this[this.b-1]==e;)--this.b},q.la=function(e,r){var t
for(t=this.b-1;t>=0;--t)r[t+e]=this[t]
for(t=e-1;t>=0;--t)r[t]=0
r.b=this.b+e,r.c=this.c},q.jb=function(e,r){for(var t=e;t<this.b;++t)r[t-e]=this[t]
r.b=Math.max(this.b-e,0),r.c=this.c},q.Qa=function(e,r){var t,i=e%this.f,n=this.f-i,a=(1<<n)-1,o=Math.floor(e/this.f),s=this.c<<i&this.u
for(t=this.b-1;t>=0;--t)r[t+o+1]=this[t]>>n|s,s=(this[t]&a)<<i
for(t=o-1;t>=0;--t)r[t]=0
r[o]=s,r.b=this.b+o+1,r.c=this.c,r.C()},q.zb=function(e,r){r.c=this.c
var t=Math.floor(e/this.f)
if(t>=this.b)r.b=0
else{var i=e%this.f,n=this.f-i,a=(1<<i)-1
r[0]=this[t]>>i
for(var o=t+1;o<this.b;++o)r[o-t-1]|=(this[o]&a)<<n,r[o-t]=this[o]>>i
i>0&&(r[this.b-t-1]|=(this.c&a)<<n),r.b=this.b-t,r.C()}},q.t=function(e,r){for(var t=0,i=0,n=Math.min(e.b,this.b);n>t;)i+=this[t]-e[t],r[t++]=i&this.u,i>>=this.f
if(e.b<this.b){for(i-=e.c;t<this.b;)i+=this[t],r[t++]=i&this.u,i>>=this.f
i+=this.c}else{for(i+=this.c;t<e.b;)i-=e[t],r[t++]=i&this.u,i>>=this.f
i-=e.c}r.c=0>i?-1:0,-1>i?r[t++]=this.K+i:i>0&&(r[t++]=i),r.b=t,r.C()},q.vb=function(e){var r=$.Xa,t=this.abs(),i=r.abs(),n=t.b
for(e.b=n+i.b;0<=--n;)e[n]=0
for(n=0;n<i.b;++n)e[n+t.b]=t.ga(i[n],e,n,t.b)
e.c=0,e.C(),this.c!=r.c&&X.ZERO.t(e,e)},q.Ja=function(e,r,t){var i=e.abs()
if(!(0>=i.b)){var n=this.abs()
if(n.b<i.b)r!=m&&r.D(0),t!=m&&this.copyTo(t)
else{t==m&&(t=Yc())
var a,o=Yc(),s=this.c,e=e.c,f=i[i.b-1],c=1
if(0!=(a=f>>>16)&&(f=a,c+=16),0!=(a=f>>8)&&(f=a,c+=8),0!=(a=f>>4)&&(f=a,c+=4),0!=(a=f>>2)&&(f=a,c+=2),0!=f>>1&&(c+=1),f=this.f-c,f>0?(i.Qa(f,o),n.Qa(f,t)):(i.copyTo(o),n.copyTo(t)),i=o.b,n=o[i-1],0!=n){a=n*(1<<this.Aa)+(i>1?o[i-2]>>this.Ba:0),c=this.bb/a,a=(1<<this.Aa)/a
var u=1<<this.Ba,l=t.b,h=l-i,b=r==m?Yc():r
for(o.la(h,b),0<=t.U(b)&&(t[t.b++]=1,t.t(b,t)),X.ONE.la(i,b),b.t(o,o);o.b<i;)o[o.b++]=0
for(;0<=--h;){var d=t[--l]==n?this.u:Math.floor(t[l]*c+(t[l-1]+u)*a)
if((t[l]+=o.ga(d,t,h,i))<d)for(o.la(h,b),t.t(b,t);t[l]<--d;)t.t(b,t)}r!=m&&(t.jb(i,r),s!=e&&X.ZERO.t(r,r)),t.b=i,t.C(),f>0&&t.zb(f,t),0>s&&X.ZERO.t(t,t)}}}},q.toString=function(e){if(0>this.c)return"-"+this.i().toString(e)
if(16==e)e=4
else if(8==e)e=3
else if(2==e)e=1
else if(32==e)e=5
else{if(4!=e)return this.Fb(e)
e=2}var r,t=(1<<e)-1,i=p,n="",a=this.b,o=this.f-a*this.f%e
if(0<a--)for(o<this.f&&0<(r=this[a]>>o)&&(i=l,n="0123456789abcdefghijklmnopqrstuvwxyz".charAt(r));a>=0;)e>o?(r=(this[a]&(1<<o)-1)<<e-o,r|=this[--a]>>(o+=this.f-e)):(r=this[a]>>(o-=e)&t,0>=o&&(o+=this.f,--a)),r>0&&(i=l),i&&(n+="0123456789abcdefghijklmnopqrstuvwxyz".charAt(r))
return i?n:"0"},q.i=function(){var e=Yc()
return X.ZERO.t(this,e),e},q.abs=function(){return 0>this.c?this.i():this},q.U=function(e){var r=this.c-e.c
if(0!=r)return r
var t=this.b,r=t-e.b
if(0!=r)return 0>this.c?-r:r
for(;0<=--t;)if(0!=(r=this[t]-e[t]))return r
return 0},X.ZERO=ad(0),X.ONE=ad(1),q=X.prototype,q.nb=function(e,r){this.D(0),r==m&&(r=10)
for(var t=this.S(r),i=Math.pow(r,t),n=p,a=0,o=0,s=0;s<e.length;++s){var f=Zc(e,s)
0>f?"-"==e.charAt(s)&&0==this.ra()&&(n=l):(o=r*o+f,++a>=t&&(this.Ia(i),this.Ha(o),o=a=0))}a>0&&(this.Ia(Math.pow(r,a)),this.Ha(o)),n&&X.ZERO.t(this,this)},q.S=function(e){return Math.floor(Math.LN2*this.f/Math.log(e))},q.ra=function(){return 0>this.c?-1:0>=this.b||1==this.b&&0>=this[0]?0:1},q.Ia=function(e){this[this.b]=this.ga(e-1,this,0,this.b),++this.b,this.C()},q.Ha=function(e){var r=0
if(0!=e){for(;this.b<=r;)this[this.b++]=0
for(this[r]+=e;this[r]>=this.K;)this[r]-=this.K,++r>=this.b&&(this[this.b++]=0),++this[r]}},q.Fb=function(e){if(e==m&&(e=10),0==this.ra()||2>e||e>36)return"0"
var r=this.S(e),r=Math.pow(e,r),t=ad(r),i=Yc(),n=Yc(),a=""
for(this.Ja(t,i,n);0<i.ra();)a=(r+n.Oa()).toString(e).substr(1)+a,i.Ja(t,i,n)
return n.Oa().toString(e)+a},q.Oa=function(){if(0>this.c){if(1==this.b)return this[0]-this.K
if(0==this.b)return-1}else{if(1==this.b)return this[0]
if(0==this.b)return 0}return(this[1]&(1<<32-this.f)-1)<<this.f|this[0]},q.fa=function(e,r){for(var t=0,i=0,n=Math.min(e.b,this.b);n>t;)i+=this[t]+e[t],r[t++]=i&this.u,i>>=this.f
if(e.b<this.b){for(i+=e.c;t<this.b;)i+=this[t],r[t++]=i&this.u,i>>=this.f
i+=this.c}else{for(i+=this.c;t<e.b;)i+=e[t],r[t++]=i&this.u,i>>=this.f
i+=e.c}r.c=0>i?-1:0,i>0?r[t++]=i:-1>i&&(r[t++]=this.K+i),r.b=t,r.C()}
var $={abs:function(e,r){var t=new Y(e,r),t=t.n()?t.i():t
B[qb>>2]=t.h,B[qb+4>>2]=t.j},Ka:function(){$.kb||($.kb=l,$.Xa=new X,$.Xa.k("4294967296",10),$.sa=new X,$.sa.k("18446744073709551616",10),$.xe=new X,$.ye=new X)},me:function(e,r){var t=new X
t.k(""+r,10)
var i=new X
t.vb(i),t=new X,t.k(""+e,10)
var n=new X
return t.fa(i,n),n},stringify:function(e,r,t){return e=""+new Y(e,r),t&&"-"==e[0]&&($.Ka(),t=new X,t.k(e,10),e=new X,$.sa.fa(t,e),e=e.toString(10)),e},k:function(e,r,t,i,n){$.Ka()
var a=new X
a.k(e,r),e=new X,e.k(t,10),t=new X,t.k(i,10),n&&0>a.U(X.ZERO)&&(i=new X,a.fa($.sa,i),a=i),i=p,0>a.U(e)?(a=e,i=l):0<a.U(t)&&(a=t,i=l),a=Y.k(""+a),B[qb>>2]=a.h,B[qb+4>>2]=a.j,i&&g("range error")}}
lc=$
var cd,dd
if(s.callMain=s.$d=function(e){function r(){for(var e=0;3>e;e++)i.push(0)}w(0==L,"cannot call main when async dependencies remain! (listen on __ATMAIN__)"),w(0==Wa.length,"cannot call main when preRun functions remain to be called"),e=e||[],ab||(ab=l,Va(Xa))
var t=e.length+1,i=[F(J("/bin/this.program"),"i8",Ka)]
r()
for(var n=0;t-1>n;n+=1)i.push(F(J(e[n]),"i8",Ka)),r()
i.push(0),i=F(i,"i32",Ka),cd=u,dd=l
var a
try{a=s._main(t,i,0)}catch(o){if(o&&"object"==typeof o&&"ExitStatus"==o.type)return s.print("Exit Status: "+o.value),o.value
"SimulateInfiniteLoop"==o?s.noExitRuntime=l:g(o)}finally{dd=p}s.noExitRuntime||ed(a)},s.run=s.we=lb,s.exit=s.de=ed,s.abort=s.abort=wa,s.preInit)for("function"==typeof s.preInit&&(s.preInit=[s.preInit]);0<s.preInit.length;)s.preInit.pop()()
var kb=l
s.noInitialRun&&(kb=p),lb()
var scrypt=function(){function e(e){return r(unescape(encodeURIComponent(e)))}function r(e){for(var r=new Uint8Array(e.length),t=0;t<e.length;t++){var i=e.charCodeAt(t)
if((255&i)!==i)throw{message:"Cannot encode string in Latin1",str:e}
r[t]=255&i}return r}function t(e){return decodeURIComponent(escape(i(e)))}function i(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]))
return r.join("")}function n(e){for(var r=[],t=0;t<e.length;t++)r.push("0123456789abcdef"[e[t]>>4&15]),r.push("0123456789abcdef"[15&e[t]])
return r.join("")}function a(e,r){var t=r||0,i=scrypt_raw._malloc(e.length+t)
scrypt_raw.HEAPU8.set(e,i+t)
for(var n=i;i+t>n;n++)scrypt_raw.HEAPU8[n]=0
return i}function o(e,r){var t=new Uint8Array(r)
return t.set(scrypt_raw.HEAPU8.subarray(e,e+r)),t}function s(e,r){if(0!==r)throw{message:"scrypt_raw."+e+" signalled an error"}}function f(e){this.length=e,this.address=scrypt_raw._malloc(e)}function c(e){for(var r=0;r<e.length;r++)scrypt_raw._free(e[r])}function u(e){var r=new Uint8Array(e)
if(void 0!==window.crypto&&void 0!==window.crypto.getRandomValues)return window.crypto.getRandomValues(r),r
if(void 0!==window.msCrypto&&void 0!==window.msCrypto.getRandomValues)return window.msCrypto.getRandomValues(r),r
throw{message:"No suitable random number generator found!"}}function l(e,r,t,i,n,o){var u=new f(o),l=a(e),h=a(r)
return s("_crypto_scrypt",scrypt_raw._crypto_scrypt(l,e.length,h,r.length,t,0,i,n,u.address,u.length)),c([l,h]),u.extractBytes()}var h={}
return f.prototype.extractBytes=function(e){var r=o(this.address+(e||0),this.length-(e||0))
return scrypt_raw._free(this.address),this.address=null,r},h.encode_utf8=e,h.encode_latin1=r,h.decode_utf8=t,h.decode_latin1=i,h.to_hex=n,h.random_bytes=u,h.crypto_scrypt=l,h}()
return scrypt}