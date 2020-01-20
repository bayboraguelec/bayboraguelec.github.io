(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"42fd5294"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"0dd1":function(t,e,n){},"16d2":function(t,e,n){"use strict";var a=n("f711"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{background:"black"}},[n("Header",{staticClass:"limitscreen"}),n("v-content",{staticClass:"limitscreen"},[n("MainArea")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-content",[n("v-container",{staticClass:"limitscreen",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"text-center":"",wrap:"","ma-6":""}},[n("v-flex",{attrs:{xs12:""}},[n("transition",{attrs:{name:"jade"}},[t.fontVisible?n("p",{staticClass:"text-md-left floating  font-weight-bold ",class:t.gradient},[t._v(t._s(t.heading))]):t._e()])],1),n("v-flex",{attrs:{xs6:""}},[n("transition",{attrs:{name:"fade"}},[t.remainingFontVisible?n("p",{staticClass:"text-md-left display-1 font-weight-regular"},[t._v(" Imagine all the people "),n("br"),t._v("living life in peace. ")]):t._e()])],1),n("v-spacer"),n("v-flex",{attrs:{xs6:""}},[n("transition",{attrs:{name:"fade"}},[t.remainingFontVisible?n("p",{staticClass:"grey--text text-md-left  .body-1 font-weight-regular"},[t._v(" Hi, my name is Baybora. I'm a software developer with a mechatronical engineering background. I love beautiful designed products, so I started getting into UI/UX & Design. You can look through my career and my resume and also get in contact with me. ")]):t._e()])],1)],1)],1)],1)],1)},s=[],c={name:"MainArea",methods:{toggleFontVisible:function(){var t=this;setTimeout((function(){t.fontVisible=!0}),500),setTimeout((function(){t.remainingFontVisible=!0}),1500)},changeHeading:function(){var t=this;setInterval((function(){t.fontVisible=!1,t.counter++,t.counter>2&&(t.counter=0),t.heading=t.headings[t.counter],t.gradient="gradient-"+t.counter,t.fontVisible=!0}),5e3)}},data:function(){return{fontVisible:!1,remainingFontVisible:!1,counter:1,heading:"Product.",headings:["Product.","UI/UX.","Design."],gradient:"gradient-0"}},mounted:function(){this.toggleFontVisible(),this.changeHeading()}},l=c,u=(n("d14b"),n("2877")),f=n("6544"),p=n.n(f),d=n("a523"),m=n("a75b"),g=n("0e8f"),b=n("a722"),v=n("2fa4"),h=Object(u["a"])(l,o,s,!1,null,"f802bec4",null),y=h.exports;p()(h,{VContainer:d["a"],VContent:m["a"],VFlex:g["a"],VLayout:b["a"],VSpacer:v["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-spacer"),a("div",{staticClass:"d-flex align-center"},[a("transition",{attrs:{name:"fade"}},[t.appBarVisible?a("v-img",{staticClass:"pa-8 ma-8",attrs:{alt:"Baybora Guelec",contain:"",src:n("5b62"),width:"85"}}):t._e()],1)],1),a("v-spacer"),a("transition",{attrs:{name:"fade"}},[t.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://www.linkedin.com/in/baybora-gülec-60465a160",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[t._v("LinkedIN")])]):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://www.linkedin.com/in/baybora-gülec-60465a160",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[t._v("LinkedIN")])]):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://www.xing.com/profile/Baybora_Guelec",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[t._v("XING")])]):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"linkedin",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[t._v("bayboragulec@gmail.com")])]):t._e()],1),a("v-spacer")],1)},w=[],x={name:"Header",methods:{toggleAppBarVisible:function(){var t=this;setTimeout((function(){t.appBarVisible=!0}),1500)}},data:function(){return{appBarVisible:!1}},mounted:function(){this.toggleAppBarVisible()}},V=x,k=(n("16d2"),n("40dc")),C=n("8336"),j=n("adda"),O=Object(u["a"])(V,_,w,!1,null,"517e4738",null),B=O.exports;p()(O,{VAppBar:k["a"],VBtn:C["a"],VImg:j["a"],VSpacer:v["a"]});var A={name:"App",components:{MainArea:y,Header:B},data:function(){return{}}},I=A,P=(n("034f"),n("7496")),M=Object(u["a"])(I,r,i,!1,null,null,null),S=M.exports;p()(M,{VApp:P["a"],VContent:m["a"]});n("d3b7");var T=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("MainArea")],1)},F=[],H={name:"home",components:{MainArea:y}},L=H,$=Object(u["a"])(L,E,F,!1,null,null,null),U=$.exports;a["a"].use(T["a"]);var G=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new T["a"]({routes:G}),X=N,D=n("2f62");a["a"].use(D["a"]);var J=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("f309");a["a"].use(q["a"]);var Y=new q["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:"black",secondary:"#6575f0"},light:{primary:"#dedfe6",secondary:"#a1a4b8"}}}});a["a"].config.productionTip=!1,new a["a"]({router:X,store:J,vuetify:Y,render:function(t){return t(S)}}).$mount("#app")},"5b62":function(t,e,n){t.exports=n.p+"img/logo.24bd7b1b.png"},"8a23":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d14b:function(t,e,n){"use strict";var a=n("0dd1"),r=n.n(a);r.a},f711:function(t,e,n){}});
//# sourceMappingURL=app.06d6a164.js.map