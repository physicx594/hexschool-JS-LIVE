(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d9919f6"],{"06cf":function(t,r,n){var e=n("83ab"),o=n("d1e7"),c=n("5c6c"),i=n("fc6a"),a=n("c04e"),f=n("5135"),u=n("0cfb"),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=i(t),r=a(r,!0),u)try{return s(t,r)}catch(n){}if(f(t,r))return c(!o.f.call(t,r),t[r])}},"1d80":function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),c=n("2d00"),i=o("species");t.exports=function(t){return c>=51||!e((function(){var r=[],n=r.constructor={};return n[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"23cb":function(t,r,n){var e=n("a691"),o=Math.max,c=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):c(n,r)}},"23e7":function(t,r,n){var e=n("da84"),o=n("06cf").f,c=n("9112"),i=n("6eeb"),a=n("ce4e"),f=n("e893"),u=n("94ca");t.exports=function(t,r){var n,s,p,d,v,l,h=t.target,b=t.global,x=t.stat;if(s=b?e:x?e[h]||a(h,{}):(e[h]||{}).prototype,s)for(p in r){if(v=r[p],t.noTargetGet?(l=o(s,p),d=l&&l.value):d=s[p],n=u(b?p:h+(x?".":"#")+p,t.forced),!n&&void 0!==d){if(typeof v===typeof d)continue;f(v,d)}(t.sham||d&&d.sham)&&c(v,"sham",!0),i(s,p,v,t)}}},"241c":function(t,r,n){var e=n("ca84"),o=n("7839"),c=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,c)}},"2d00":function(t,r,n){var e,o,c=n("da84"),i=n("342f"),a=c.process,f=a&&a.versions,u=f&&f.v8;u?(e=u.split("."),o=e[0]+e[1]):i&&(e=i.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/),e&&(o=e[1]))),t.exports=o&&+o},"342f":function(t,r,n){var e=n("d066");t.exports=e("navigator","userAgent")||""},"428f":function(t,r,n){var e=n("da84");t.exports=e},"44ad":function(t,r,n){var e=n("d039"),o=n("c6b6"),c="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"4d64":function(t,r,n){var e=n("fc6a"),o=n("50c4"),c=n("23cb"),i=function(t){return function(r,n,i){var a,f=e(r),u=o(f.length),s=c(i,u);if(t&&n!=n){while(u>s)if(a=f[s++],a!=a)return!0}else for(;u>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,r,n){var e=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},"56ef":function(t,r,n){var e=n("d066"),o=n("241c"),c=n("7418"),i=n("825a");t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(i(t)),n=c.f;return n?r.concat(n(t)):r}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},7418:function(t,r){r.f=Object.getOwnPropertySymbols},7839:function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,r,n){var e=n("1d80");t.exports=function(t){return Object(e(t))}},8247:function(t,r,n){"use strict";var e=n("eba7"),o=n.n(e);o.a},8418:function(t,r,n){"use strict";var e=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var i=e(r);i in t?o.f(t,i,c(0,n)):t[i]=n}},"94ca":function(t,r,n){var e=n("d039"),o=/#|\.prototype\./,c=function(t,r){var n=a[i(t)];return n==u||n!=f&&("function"==typeof r?e(r):!!r)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",u=c.POLYFILL="P";t.exports=c},"99af":function(t,r,n){"use strict";var e=n("23e7"),o=n("d039"),c=n("e8b5"),i=n("861d"),a=n("7b0b"),f=n("50c4"),u=n("8418"),s=n("65f0"),p=n("1dde"),d=n("b622"),v=n("2d00"),l=d("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",x=v>=51||!o((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),y=p("concat"),g=function(t){if(!i(t))return!1;var r=t[l];return void 0!==r?!!r:c(t)},m=!x||!y;e({target:"Array",proto:!0,forced:m},{concat:function(t){var r,n,e,o,c,i=a(this),p=s(i,0),d=0;for(r=-1,e=arguments.length;r<e;r++)if(c=-1===r?i:arguments[r],g(c)){if(o=f(c.length),d+o>h)throw TypeError(b);for(n=0;n<o;n++,d++)n in c&&u(p,d,c[n])}else{if(d>=h)throw TypeError(b);u(p,d++,c)}return p.length=d,p}})},a691:function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},ca84:function(t,r,n){var e=n("5135"),o=n("fc6a"),c=n("4d64").indexOf,i=n("d012");t.exports=function(t,r){var n,a=o(t),f=0,u=[];for(n in a)!e(i,n)&&e(a,n)&&u.push(n);while(r.length>f)e(a,n=r[f++])&&(~c(u,n)||u.push(n));return u}},d066:function(t,r,n){var e=n("428f"),o=n("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?c(e[t])||c(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},d1e7:function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!e.call({1:2},1);r.f=c?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},e6dc:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h1",[t._v("產品列表")]),n("table",[t._m(0),t._l(t.products,(function(r,e){return n("tr",{key:e},[n("td",[t._v(t._s(r.title))]),n("td",[t._v(t._s(r.price||r.origin_price))]),n("td",[n("router-link",{attrs:{to:"/product/"+r.id}},[t._v("詳細資料")])],1)])}))],2)])},o=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("tr",[n("th",[t._v("名稱")]),n("th",[t._v("價格")]),n("th")])}],c=(n("99af"),{data:function(){return{products:[]}},methods:{getProducts:function(){var t=this,r="".concat("https://course-ec-api.hexschool.io/api","/").concat("959cce3f-fa83-4b05-98f8-f72861d9cdc1","/ec/products");this.axios.get(r).then((function(r){t.products=r.data.data,console.log(r)}))}},created:function(){this.getProducts()}}),i=c,a=(n("8247"),n("2877")),f=Object(a["a"])(i,e,o,!1,null,null,null);r["default"]=f.exports},e893:function(t,r,n){var e=n("5135"),o=n("56ef"),c=n("06cf"),i=n("9bf2");t.exports=function(t,r){for(var n=o(r),a=i.f,f=c.f,u=0;u<n.length;u++){var s=n[u];e(t,s)||a(t,s,f(r,s))}}},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},eba7:function(t,r,n){},fc6a:function(t,r,n){var e=n("44ad"),o=n("1d80");t.exports=function(t){return e(o(t))}}}]);
//# sourceMappingURL=chunk-0d9919f6.c790ac13.js.map