(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-test"],{"19d0":function(t,e,n){"use strict";n.r(e);var u=n("3be1"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"3be1":function(t,e,n){"use strict";var u=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("f499")),r={data:function(){return{url:"http://www.baidu.com"}},onLoad:function(t){t&&t.url&&(this.url=t.url)},methods:{getMessage:function(t){uni.showModal({content:(0,a.default)(t.detail),showCancel:!1})}}};e.default=r},"6b02":function(t,e,n){"use strict";n.r(e);var u=n("a944"),a=n("19d0");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"170ef832",null);e["default"]=i.exports},a944:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-web-view",{attrs:{src:t.url},on:{message:function(e){e=t.$handleEvent(e),t.getMessage(e)}}})},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})}}]);