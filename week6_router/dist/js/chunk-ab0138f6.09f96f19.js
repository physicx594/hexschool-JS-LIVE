(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab0138f6"],{"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),a=n("5c6c"),c=n("fc6a"),i=n("c04e"),u=n("5135"),s=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=i(e,!0),s)try{return f(t,e)}catch(n){}if(u(t,e))return a(!o.f.call(t,e),t[e])}},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("2d00"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"206d":function(t,e,n){"use strict";var r=n("4413"),o=n.n(r);o.a},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):a(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,a=n("9112"),c=n("6eeb"),i=n("ce4e"),u=n("e893"),s=n("94ca");t.exports=function(t,e){var n,f,l,p,d,v,h=t.target,g=t.global,x=t.stat;if(f=g?r:x?r[h]||i(h,{}):(r[h]||{}).prototype,f)for(l in e){if(d=e[l],t.noTargetGet?(v=o(f,l),p=v&&v.value):p=f[l],n=s(g?l:h+(x?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&a(d,"sham",!0),c(f,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),a=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"2d00":function(t,e,n){var r,o,a=n("da84"),c=n("342f"),i=a.process,u=i&&i.versions,s=u&&u.v8;s?(r=s.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"428f":function(t,e,n){var r=n("da84");t.exports=r},4413:function(t,e,n){},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),a="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),a=n("23cb"),c=function(t){return function(e,n,c){var i,u=r(e),s=o(u.length),f=a(c,s);if(t&&n!=n){while(s>f)if(i=u[f++],i!=i)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5319:function(t,e,n){"use strict";var r=n("d784"),o=n("825a"),a=n("7b0b"),c=n("50c4"),i=n("a691"),u=n("1d80"),s=n("8aa5"),f=n("14c3"),l=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(n,r){var o=u(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!x&&b||"string"===typeof r&&-1===r.indexOf(m)){var a=n(e,t,this,r);if(a.done)return a.value}var u=o(t),d=String(this),v="function"===typeof r;v||(r=String(r));var h=u.global;if(h){var y=u.unicode;u.lastIndex=0}var w=[];while(1){var A=f(u,d);if(null===A)break;if(w.push(A),!h)break;var P=String(A[0]);""===P&&(u.lastIndex=s(d,c(u.lastIndex),y))}for(var S="",O=0,R=0;R<w.length;R++){A=w[R];for(var C=String(A[0]),I=l(p(i(A.index),d.length),0),_=[],$=1;$<A.length;$++)_.push(g(A[$]));var T=A.groups;if(v){var k=[C].concat(_,I,d);void 0!==T&&k.push(T);var N=String(r.apply(void 0,k))}else N=E(C,d,I,_,T,r);I>=O&&(S+=d.slice(O,I)+N,O=I+C.length)}return S+d.slice(O)}];function E(t,n,r,o,c,i){var u=r+t.length,s=o.length,f=h;return void 0!==c&&(c=a(c),f=v),e.call(i,f,(function(e,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":i=c[a.slice(1,-1)];break;default:var f=+a;if(0===f)return e;if(f>s){var l=d(f/10);return 0===l?e:l<=s?void 0===o[l-1]?a.charAt(1):o[l-1]+a.charAt(1):e}i=o[f-1]}return void 0===i?"":i}))}}))},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),a=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=a.f;return n?e.concat(n(t)):e}},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),a=function(t){return function(e,n){var a,c,i=String(o(e)),u=r(n),s=i.length;return u<0||u>=s?t?"":void 0:(a=i.charCodeAt(u),a<55296||a>56319||u+1===s||(c=i.charCodeAt(u+1))<56320||c>57343?t?i.charAt(u):a:t?i.slice(u,u+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),c=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,a(0,n)):t[c]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,i=a,u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=u||f||s;l&&(i=function(t){var e,n,o,i,l=this,p=s&&l.sticky,d=r.call(l),v=l.source,h=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",d)),f&&(n=new RegExp("^"+v+"$(?!\\s)",d)),u&&(e=l.lastIndex),o=a.call(p?n:l,g),p?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:u&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),f&&o&&o.length>1&&c.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=i},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,a=function(t,e){var n=i[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),u=n("50c4"),s=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),d=n("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",x=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),m=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},E=!x||!b;r({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,r,o,a,c=i(this),l=f(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?c:arguments[e],m(a)){if(o=u(a.length),p+o>h)throw TypeError(g);for(n=0;n<o;n++,p++)n in a&&s(l,p,a[n])}else{if(p>=h)throw TypeError(g);s(l,p++,a)}return l.length=p,l}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("h1",{staticClass:"h3 mb-3 "},[t._v(" 會員登入 ")]),n("div",{staticClass:"form-group text-left"},[n("label",{staticClass:"font-weight-700",attrs:{for:"inputEmail"}},[t._v("帳號")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),n("div",{staticClass:"form-group text-left"},[n("label",{attrs:{for:"inputPassword"}},[t._v("密碼")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("button",{staticClass:"btn submit",attrs:{type:"submit"}},[t._v(" 登入 ")]),n("router-link",{staticClass:"btn  btn-outline-secondary",attrs:{to:"/products"}},[t._v("回首頁")])],1)])},o=[],a=(n("99af"),n("ac1f"),n("5319"),{data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/auth/login");this.axios.post(e,this.user).then((function(e){var n=e.data.token,r=e.data.expired;document.cookie="token=".concat(n,"; expires=").concat(new Date(1e3*r),"; path=/"),console.log("登入成功"),t.$router.push("/admin/products")})).catch((function(t){console.log(t)}))},getData:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");var t="".concat("https://course-ec-api.hexschool.io/api","/").concat("959cce3f-fa83-4b05-98f8-f72861d9cdc1","/admin/ec/products");this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.axios.get(t).then((function(t){console.log(t)}))}}}),c=a,i=(n("206d"),n("2877")),u=Object(i["a"])(c,r,o,!1,null,null,null);e["default"]=u.exports},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),a=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,i=o(t),u=0,s=[];for(n in i)!r(c,n)&&r(i,n)&&s.push(n);while(e.length>u)r(i,n=e[u++])&&(~a(s,n)||s.push(n));return s}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t])||a(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);e.f=a?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),a=n("b622"),c=n("9263"),i=n("9112"),u=a("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=a("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var v=a(t),h=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!s||!f||p)||"split"===t&&!d){var x=/./[v],b=n(v,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],E=b[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}l&&i(RegExp.prototype[v],"sham",!0)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),a=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),i=c.f,u=a.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||i(t,f,u(e,f))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}}}]);
//# sourceMappingURL=chunk-ab0138f6.09f96f19.js.map