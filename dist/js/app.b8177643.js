(function(e){function t(t){for(var r,l,u=t[0],c=t[1],i=t[2],s=0,d=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},o={app:0},n=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e6efb792"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var i=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",i.name="ChunkLoadError",i.type=r,i.request=n,a[1](i)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var b=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),o=a("7bb1"),n=a("3aa8"),l=a("cbdf"),u=a("9457");const c={id:"nav"},i=Object(r["e"])("button",{type:"button",class:"btn btn-primary"},"Primary",-1);function s(e,t,a,o,n,l){const u=Object(r["B"])("router-link"),s=Object(r["B"])("router-view");return Object(r["v"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",c,[Object(r["h"])(u,{to:"/"},{default:Object(r["K"])(()=>[Object(r["g"])("Home")]),_:1}),Object(r["g"])(" | "),Object(r["h"])(u,{to:"/about"},{default:Object(r["K"])(()=>[Object(r["g"])("About")]),_:1})]),Object(r["h"])(s),Object(r["g"])(" "+Object(r["E"])(n.name)+" ",1),i],64)}var b={data(){return{name:"老闆的家",qq:"123"}}},d=(a("e2f6"),a("6b0d")),v=a.n(d);const p=v()(b,[["render",s]]);var h=p,m=a("6605"),f=a("cf05"),j=a.n(f);const g={class:"home"},O=Object(r["e"])("img",{alt:"Vue logo",src:j.a},null,-1),y={class:"mb-3"},_=Object(r["e"])("label",{for:"email",class:"form-label"},"Email",-1),k=Object(r["e"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function w(e,t,a,o,n,l){const u=Object(r["B"])("HelloWorld"),c=Object(r["B"])("Field"),i=Object(r["B"])("Error-Message"),s=Object(r["B"])("Form");return Object(r["v"])(),Object(r["d"])("div",g,[O,Object(r["h"])(u,{msg:"Welcome to Your Vue.js App"}),Object(r["h"])(s,{onSubmit:l.onSubmit},{default:Object(r["K"])(({errors:e})=>[Object(r["g"])(Object(r["E"])(e)+" ",1),Object(r["e"])("div",y,[_,Object(r["h"])(c,{id:"email",name:"email",type:"email",class:Object(r["p"])(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:n.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>n.user.email=e)},null,8,["class","modelValue"]),Object(r["h"])(i,{name:"email",class:"invalid-feedback"})]),k]),_:1},8,["onSubmit"])])}const E={class:"hello"},P=Object(r["f"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function S(e,t,a,o,n,l){return Object(r["v"])(),Object(r["d"])("div",E,[Object(r["e"])("h1",null,Object(r["E"])(a.msg),1),P])}var x={name:"HelloWorld",props:{msg:String}};a("65e4");const M=v()(x,[["render",S],["__scopeId","data-v-5141a303"]]);var T=M,B={name:"Home",components:{HelloWorld:T},data(){return{user:{}}},methods:{onSubmit(){console.log(this.user)}},created(){console.log(this)}};const C=v()(B,[["render",w]]);var F=C;const H=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],W=Object(m["a"])({history:Object(m["b"])(),routes:H});var q=W;Object(o["e"])("required",n["c"]),Object(o["e"])("email",n["a"]),Object(o["e"])("min",n["b"]),Object(o["d"])({generateMessage:Object(l["a"])({zh_TW:u}),validateOnInput:!0}),Object(l["b"])("zh_TW");const V=Object(r["c"])(h).use(q);V.component("Form",o["c"]),V.component("Field",o["b"]),V.component("ErrorMessage",o["a"]),V.mount("#app")},"5e10":function(e,t,a){},6560:function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e2f6:function(e,t,a){"use strict";a("6560")}});
//# sourceMappingURL=app.b8177643.js.map