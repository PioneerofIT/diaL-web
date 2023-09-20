(function(){"use strict";var e={138:function(e,t,n){var r=n(144),o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"title-container"},[t("h1",{staticClass:"main-title"},[e._v("diaL Lab 관리자 페이지 ")]),t("p",{staticClass:"sub-title"},[e._v("타겟 장소: 한밭대학교 N5 302호")]),t("div",[e._v(e._s(e.data))])]),t("nav",[t("router-link",{staticClass:"menu-button",attrs:{to:"/"}},[e._v(" Home")]),t("router-link",{staticClass:"menu-button",attrs:{to:"/LiveSensorPage"}},[e._v(" 실시간 데이터 ")]),t("router-link",{staticClass:"menu-button",attrs:{to:"/MLPage"}},[e._v(" 실시간 화재 판단 ")]),t("router-link",{staticClass:"menu-button",attrs:{to:"/LiveCCTV"}},[e._v(" 실시간 CCTV ")]),t("router-link",{staticClass:"menu-button",attrs:{to:"/TwinPage"}},[e._v(" 3D 가상 건물 ")])],1),t("router-view")],1)},a=[],i=n(154),u={data(){return{message:"diaL-Web 공사중",data:null,loading:!1,error:null,assetId:"83ecd1bb-0edb-4b38-9d45-667ac1a500e2"}},created(){this.fetchAssetData()},methods:{onMenuClick(e){"Menu 1"==e&&this.$router.push("/LiveSensorPage")},async fetchAssetData(){this.loading=!0,this.error=null;try{const e="https://p3j7hfgon0.execute-api.us-west-2.amazonaws.com/",t=await i.Z.get(e);this.data=t.data}catch(e){console.error("Error fetching asset data:",e)}finally{this.loading=!1}}}},s=u,c=n(1),l=(0,c.Z)(s,o,a,!1,null,"5ce9e0f3",null),f=l.exports,d=n(345);r.ZP.use(d.ZP);var p=new d.ZP({routes:[{path:"/",name:"MainLayout",component:()=>n.e(701).then(n.bind(n,701))},{path:"/LiveSensorPage",name:"LiveSensorPage",component:()=>n.e(342).then(n.bind(n,342))},{path:"/TwinPage",name:"TwinPage",component:()=>n.e(108).then(n.bind(n,108))},{path:"/MLPage",name:"MLPage",component:()=>n.e(269).then(n.bind(n,269))},{path:"/LiveCCTV",name:"LiveCCTV",component:()=>n.e(230).then(n.bind(n,230))},{path:"/LiveSensorPage/co",name:"co",component:()=>n.e(570).then(n.bind(n,570))},{path:"/LiveSensorPage/huminity",name:"huminity",component:()=>n.e(241).then(n.bind(n,241))},{path:"/LiveSensorPage/temperature",name:"temperature",component:()=>n.e(234).then(n.bind(n,234))}]});r.ZP.config.productionTip=!1,new r.ZP({router:p,render:e=>e(f)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{108:"7986b4d0",230:"3467b7a5",234:"db23113c",241:"76c6cbe0",269:"a548c698",342:"6641a917",570:"02860d27",701:"95e03a12"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{108:"aad43a72",230:"df80d2b3",234:"5a303637",269:"b7a3637a",342:"5d9a6a27"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-sample:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={108:1,230:1,234:1,269:1,342:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkvue_sample"]=self["webpackChunkvue_sample"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(138)}));r=n.O(r)})();
//# sourceMappingURL=app.fe62556f.js.map