import{A as V,k as A,l as b,m as v,n as $,o as P,p as u,q as y,r as w,w as U,x as B,y as q,z}from"./chunk-VCFO7E4N.js";import{$ as a,U as N,V as S,X as o,Xa as g,Z as l,ea as k,g as W,ha as I,kc as O,n as M,ra as C,ya as j,z as L}from"./chunk-VP7AJPYJ.js";import{u as E,w as D}from"./chunk-HLIJDICJ.js";var G="auth",p=class{constructor(e){return e}},m=class{constructor(){return v(G)}};var T=new o("angularfire2.auth-instances");function Ke(t,e){let r=b(G,t,e);return r&&new p(r)}function _e(t){return(e,r)=>{let n=e.runOutsideAngular(()=>t(r));return new p(n)}}var Qe={provide:m,deps:[[new a,T]]},Ze={provide:p,useFactory:Ke,deps:[[new a,T],y]};function tn(t,...e){return E("angularfire",A.full,"auth"),I([Ze,Qe,{provide:T,useFactory:_e(t),multi:!0,deps:[g,C,P,w,[new a,$],...e]}])}var nn=u(D,!0);var f=class{constructor(e){return e}},H="firestore",F=class{constructor(){return v(H)}};var x=new o("angularfire2.firestore-instances");function Ye(t,e){let r=b(H,t,e);return r&&new f(r)}function Je(t){return(e,r)=>{let n=e.runOutsideAngular(()=>t(r));return new f(n)}}var Xe={provide:F,deps:[[new a,x]]},et={provide:f,useFactory:Ye,deps:[[new a,x],y]};function Ps(t,...e){return E("angularfire",A.full,"fst"),I([et,Xe,{provide:x,useFactory:Je(t),multi:!0,deps:[g,C,P,w,[new a,m],[new a,$],...e]}])}var ys=u(U,!0);var ws=u(V,!0);var Rs=u(B,!0);var Ss=u(q,!0);var ks=u(z,!0);var tt=new o("recaptcha-language"),nt=new o("recaptcha-base-url"),st=new o("recaptcha-nonce-tag"),sr=new o("recaptcha-settings"),rt=new o("recaptcha-v3-site-key"),ot=new o("recaptcha-loader-options");function it(t,e,r,{url:n,lang:s,nonce:i}={}){window.ng2recaptchaloaded=()=>{r(grecaptcha)};let c=document.createElement("script");c.innerHTML="";let{url:d,nonce:R}=e(new URL(n||"https://www.google.com/recaptcha/api.js"));d.searchParams.set("render",t==="explicit"?t:t.key),d.searchParams.set("onload","ng2recaptchaloaded"),d.searchParams.set("trustedtypes","true"),s&&d.searchParams.set("hl",s),c.src=d.href;let h=R||i;h&&c.setAttribute("nonce",h),c.async=!0,c.defer=!0,document.head.appendChild(c)}function at({v3SiteKey:t,onBeforeLoad:e,onLoaded:r}){let n=t?{key:t}:"explicit";K.loadScript(n,e,r)}var K={loadScript:it,newLoadScript:at};function ct(t){return t.asObservable().pipe(L(e=>e!==null))}var ut=(()=>{let e=class e{constructor(n,s,i,c,d,R){this.platformId=n,this.language=s,this.baseUrl=i,this.nonce=c,this.v3SiteKey=d,this.options=R;let h=this.init();this.ready=h?ct(h):M()}init(){if(e.ready)return e.ready;if(!O(this.platformId))return;let n=new W(null);return e.ready=n,K.newLoadScript({v3SiteKey:this.v3SiteKey,onBeforeLoad:s=>{if(this.options?.onBeforeLoad)return this.options.onBeforeLoad(s);let i=new URL(this.baseUrl??s);return this.language&&i.searchParams.set("hl",this.language),{url:i,nonce:this.nonce}},onLoaded:s=>{let i=s;this.options?.onLoaded&&(i=this.options.onLoaded(s)),n.next(i)}}),n}};e.ready=null,e.\u0275fac=function(s){return new(s||e)(l(j),l(tt,8),l(nt,8),l(st,8),l(rt,8),l(ot,8))},e.\u0275prov=N({token:e,factory:e.\u0275fac});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=k({type:e}),e.\u0275inj=S({});let t=e;return t})(),rr=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=k({type:e}),e.\u0275inj=S({providers:[ut],imports:[dt]});let t=e;return t})();export{tn as a,nn as b,Ps as c,ys as d,ws as e,Rs as f,Ss as g,ks as h,rt as i,rr as j};
