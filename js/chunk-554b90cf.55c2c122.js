(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554b90cf"],{"06cf":function(t,r,n){var e=n("83ab"),o=n("d1e7"),c=n("5c6c"),a=n("fc6a"),i=n("c04e"),f=n("5135"),u=n("0cfb"),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=a(t),r=i(r,!0),u)try{return s(t,r)}catch(n){}if(f(t,r))return c(!o.f.call(t,r),t[r])}},"1d80":function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),c=n("2d00"),a=o("species");t.exports=function(t){return c>=51||!e((function(){var r=[],n=r.constructor={};return n[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"23cb":function(t,r,n){var e=n("a691"),o=Math.max,c=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):c(n,r)}},"23e7":function(t,r,n){var e=n("da84"),o=n("06cf").f,c=n("9112"),a=n("6eeb"),i=n("ce4e"),f=n("e893"),u=n("94ca");t.exports=function(t,r){var n,s,p,d,l,v,h=t.target,b=t.global,x=t.stat;if(s=b?e:x?e[h]||i(h,{}):(e[h]||{}).prototype,s)for(p in r){if(l=r[p],t.noTargetGet?(v=o(s,p),d=v&&v.value):d=s[p],n=u(b?p:h+(x?".":"#")+p,t.forced),!n&&void 0!==d){if(typeof l===typeof d)continue;f(l,d)}(t.sham||d&&d.sham)&&c(l,"sham",!0),a(s,p,l,t)}}},"241c":function(t,r,n){var e=n("ca84"),o=n("7839"),c=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,c)}},"2d00":function(t,r,n){var e,o,c=n("da84"),a=n("342f"),i=c.process,f=i&&i.versions,u=f&&f.v8;u?(e=u.split("."),o=e[0]+e[1]):a&&(e=a.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=a.match(/Chrome\/(\d+)/),e&&(o=e[1]))),t.exports=o&&+o},"342f":function(t,r,n){var e=n("d066");t.exports=e("navigator","userAgent")||""},"428f":function(t,r,n){var e=n("da84");t.exports=e},"44ad":function(t,r,n){var e=n("d039"),o=n("c6b6"),c="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"4d64":function(t,r,n){var e=n("fc6a"),o=n("50c4"),c=n("23cb"),a=function(t){return function(r,n,a){var i,f=e(r),u=o(f.length),s=c(a,u);if(t&&n!=n){while(u>s)if(i=f[s++],i!=i)return!0}else for(;u>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,r,n){var e=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},"56ef":function(t,r,n){var e=n("d066"),o=n("241c"),c=n("7418"),a=n("825a");t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(a(t)),n=c.f;return n?r.concat(n(t)):r}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),c=n("b622"),a=c("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},7418:function(t,r){r.f=Object.getOwnPropertySymbols},7664:function(t,r,n){var e=n("24fb");r=e(!1),r.push([t.i,"table tr td{text-align:left}",""]),t.exports=r},7839:function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,r,n){var e=n("1d80");t.exports=function(t){return Object(e(t))}},8247:function(t,r,n){"use strict";var e=n("9b99"),o=n.n(e);o.a},8418:function(t,r,n){"use strict";var e=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,c(0,n)):t[a]=n}},"94ca":function(t,r,n){var e=n("d039"),o=/#|\.prototype\./,c=function(t,r){var n=i[a(t)];return n==u||n!=f&&("function"==typeof r?e(r):!!r)},a=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=c.data={},f=c.NATIVE="N",u=c.POLYFILL="P";t.exports=c},"99af":function(t,r,n){"use strict";var e=n("23e7"),o=n("d039"),c=n("e8b5"),a=n("861d"),i=n("7b0b"),f=n("50c4"),u=n("8418"),s=n("65f0"),p=n("1dde"),d=n("b622"),l=n("2d00"),v=d("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",x=l>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=p("concat"),g=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},m=!x||!y;e({target:"Array",proto:!0,forced:m},{concat:function(t){var r,n,e,o,c,a=i(this),p=s(a,0),d=0;for(r=-1,e=arguments.length;r<e;r++)if(c=-1===r?a:arguments[r],g(c)){if(o=f(c.length),d+o>h)throw TypeError(b);for(n=0;n<o;n++,d++)n in c&&u(p,d,c[n])}else{if(d>=h)throw TypeError(b);u(p,d++,c)}return p.length=d,p}})},"9b99":function(t,r,n){var e=n("7664");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("499e").default;o("065c1afc",e,!0,{sourceMap:!1,shadowMode:!1})},a691:function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},ca84:function(t,r,n){var e=n("5135"),o=n("fc6a"),c=n("4d64").indexOf,a=n("d012");t.exports=function(t,r){var n,i=o(t),f=0,u=[];for(n in i)!e(a,n)&&e(i,n)&&u.push(n);while(r.length>f)e(i,n=r[f++])&&(~c(u,n)||u.push(n));return u}},d066:function(t,r,n){var e=n("428f"),o=n("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?c(e[t])||c(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},d1e7:function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!e.call({1:2},1);r.f=c?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},e6dc:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h1",[t._v("產品列表")]),n("table",[t._m(0),t._l(t.products,(function(r,e){return n("tr",{key:e},[n("td",[t._v(t._s(r.title))]),n("td",[t._v(t._s(r.price||r.origin_price))]),n("td",[n("router-link",{attrs:{to:"/product/"+r.id}},[t._v("詳細資料")])],1)])}))],2)])},o=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("tr",[n("th",[t._v("名稱")]),n("th",[t._v("價格")]),n("th")])}],c=(n("99af"),{data:function(){return{products:[]}},methods:{getProducts:function(){var t=this,r="".concat("https://course-ec-api.hexschool.io/api","/").concat("959cce3f-fa83-4b05-98f8-f72861d9cdc1","/ec/products");this.axios.get(r).then((function(r){t.products=r.data.data,console.log(r)}))}},created:function(){this.getProducts()}}),a=c,i=(n("8247"),n("2877")),f=Object(i["a"])(a,e,o,!1,null,null,null);r["default"]=f.exports},e893:function(t,r,n){var e=n("5135"),o=n("56ef"),c=n("06cf"),a=n("9bf2");t.exports=function(t,r){for(var n=o(r),i=a.f,f=c.f,u=0;u<n.length;u++){var s=n[u];e(t,s)||i(t,s,f(r,s))}}},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fc6a:function(t,r,n){var e=n("44ad"),o=n("1d80");t.exports=function(t){return e(o(t))}}}]);
//# sourceMappingURL=chunk-554b90cf.55c2c122.js.map