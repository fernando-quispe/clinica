import{f as be,g as b,h as Y,m as Pe,n as G,p as Ee,u as $e}from"./chunk-VI6CLYK7.js";import{a as ye}from"./chunk-SSTDKEAJ.js";import{b as Ce}from"./chunk-EDNJCEIB.js";import{c as Ie,d as p,e as C,g as a,i as y,j as i}from"./chunk-3PKXA2GJ.js";import"./chunk-KLR2XK6T.js";import{A as ve,B as Ae,a as ce,b as W,c as ue,e as le,g as de,h as pe,i as me,k as L,l as U,m as B,n as z,o as j,p as V,q as _,r as q,s as H,t as K,u as he,w as ge,y as fe}from"./chunk-HAULGCLZ.js";import{$ as d,Gb as A,Pa as re,Ra as ae,S as ne,Sa as T,U as D,Ua as k,Wa as N,X as R,Xa as m,Z as F,_ as w,_b as O,da as f,gb as ie,ha as v,ia as oe,kb as c,lb as l,mb as h,ra as M,wb as se,xb as g,za as I}from"./chunk-VP7AJPYJ.js";import{u as x,w as X}from"./chunk-HLIJDICJ.js";import"./chunk-YT5AF7SN.js";import"./chunk-SO6VPFYA.js";var Se=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-bienvenido"]],standalone:!0,features:[A],decls:10,vars:0,consts:[[1,"container"],[1,"text-center","TituloColor"]],template:function(r,s){r&1&&(h(0,"app-menu-gral"),c(1,"section",0)(2,"div"),h(3,"br")(4,"br")(5,"br"),c(6,"h1",1),g(7," USUARIO AUTENTICADO"),l(),c(8,"h3",1),g(9," SELECCIONE SU OPCION DEL MEN\xDA "),l()()())},dependencies:[ve],styles:['.container[_ngcontent-%COMP%]{background-image:url("./media/clinica03-5QTCLINU.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;max-width:3000px}section[_ngcontent-%COMP%]{background-image:linear-gradient(to left,#a8c8e6,#74d6e7);height:100vh}.TituloColor[_ngcontent-%COMP%]{color:#efecec}']});let t=e;return t})();var De=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-bienvenido-login"]],standalone:!0,features:[A],decls:15,vars:0,consts:[[1,"container"],[1,"texto-arriba"]],template:function(r,s){r&1&&(h(0,"app-menu-inicio"),c(1,"section")(2,"div",0)(3,"p",1)(4,"strong"),g(5,"Bienvenido a la Cl\xEDnica Online, su soluci\xF3n de atenci\xF3n m\xE9dica en l\xEDnea. "),l()(),c(6,"p",1)(7,"strong"),g(8,"Nuestra cl\xEDnica se dedica a proporcionar servicios de salud accesibles y de alta calidad."),l()(),c(9,"p",1)(10,"strong"),g(11,"La cl\xEDnica Online es un sistema por el cual los usuarios (Administradores, Especialistas y Pacientes)"),l()(),c(12,"p",1)(13,"strong"),g(14,"pueden acceder a sacar turnos, ver sus horarios, visualizar el historial cl\xEDnico, entre otras opciones."),l()()()())},dependencies:[Ae],styles:['.container[_ngcontent-%COMP%]{background-image:url("./media/bienvenida-OEBAXFWM.jpg");background-size:cover;background-repeat:no-repeat;height:93vh;max-width:3000px}section[_ngcontent-%COMP%]{background-image:linear-gradient(to left,#a8c8e6,#74d6e7);height:93vh}.peque\\f1o[_ngcontent-%COMP%]{font-size:12px}.medio[_ngcontent-%COMP%]{font-size:16px}.grande[_ngcontent-%COMP%]{font-size:24px}.muy-grande[_ngcontent-%COMP%]{font-size:36px}.texto-arriba[_ngcontent-%COMP%]{margin-top:130;font-size:22px;text-align:center}']});let t=e;return t})();var Re=[{path:"bienvenido",component:Se,data:{animation:"bienvenido"}},{path:"bienvenidoLogin",component:De,data:{animation:"bienvenidoLogin"}},{path:"auth",loadChildren:()=>import("./chunk-7LTGBL2D.js").then(t=>t.AuthModule),data:{animation:"auth"}},{path:"paciente",loadChildren:()=>import("./chunk-TW7RAD3F.js").then(t=>t.PacienteModule)},{path:"especialista",loadChildren:()=>import("./chunk-KGJ36I7T.js").then(t=>t.EspecialistaModule)},{path:"admin",loadChildren:()=>import("./chunk-7B2OH5GG.js").then(t=>t.AdminModule)},{path:"",redirectTo:"bienvenidoLogin",pathMatch:"full"},{path:"**",pathMatch:"full",redirectTo:"bienvenidoLogin"}];var Fe="auth",P=class{constructor(e){return e}},E=class{constructor(){return B(Fe)}};var Z=new R("angularfire2.auth-instances");function jt(t,e){let n=U(Fe,t,e);return n&&new P(n)}function Vt(t){return(e,n)=>{let o=e.runOutsideAngular(()=>t(n));return new P(o)}}var _t={provide:E,deps:[[new d,Z]]},qt={provide:P,useFactory:jt,deps:[[new d,Z],_]};function we(t,...e){return x("angularfire",L.full,"auth"),v([qt,_t,{provide:Z,useFactory:Vt(t),multi:!0,deps:[m,M,j,q,[new d,z],...e]}])}var Me=V(X,!0);var $=class{constructor(e){return e}},Te="firestore",J=class{constructor(){return B(Te)}};var ee=new R("angularfire2.firestore-instances");function Yt(t,e){let n=U(Te,t,e);return n&&new $(n)}function Gt(t){return(e,n)=>{let o=e.runOutsideAngular(()=>t(n));return new $(o)}}var Qt={provide:J,deps:[[new d,ee]]},Ht={provide:$,useFactory:Yt,deps:[[new d,ee],_]};function ke(t,...e){return x("angularfire",L.full,"fst"),v([Ht,Qt,{provide:ee,useFactory:Gt(t),multi:!0,deps:[m,M,j,q,[new d,E],[new d,z],...e]}])}var Ne=V(ge,!0);var Oe={production:!0,firebase:{apiKey:"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",authDomain:"tp2clinica.firebaseapp.com",projectId:"tp2clinica",storageBucket:"tp2clinica.appspot.com",messagingSenderId:"798331900574",appId:"1:798331900574:web:9134b7ba2eb8310660618f"}};var Kt=(()=>{let e=class e extends G{constructor(o,r,s){super(o,r,s,w(T,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(F(O),F(b),F(Y))},e.\u0275prov=D({token:e,factory:e.\u0275fac});let t=e;return t})();function Xt(){return new Pe}function Zt(t,e,n){return new $e(t,e,n)}var We=[{provide:Y,useFactory:Xt},{provide:G,useClass:Kt},{provide:k,useFactory:Zt,deps:[W,G,m]}],Jt=[{provide:b,useFactory:()=>new Ee},{provide:I,useValue:"BrowserAnimations"},...We],Vr=[{provide:b,useClass:be},{provide:I,useValue:"NoopAnimations"},...We];function xe(){return N("NgEagerAnimations"),[...Jt]}var en="@",tn=(()=>{let e=class e{constructor(o,r,s,u,S){this.doc=o,this.delegate=r,this.zone=s,this.animationType=u,this.moduleImpl=S,this._rendererFactoryPromise=null,this.scheduler=w(T,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-IVNHIVRX.js")).catch(r=>{throw new ne(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let u=new s(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(o,r){let s=this.delegate.createRenderer(o,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let u=new te(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(S=>{let je=S.createRenderer(o,r);u.use(je)}).catch(S=>{u.use(s)}),u}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){ae()},e.\u0275prov=D({token:e,factory:e.\u0275fac});let t=e;return t})(),te=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,o,r){this.delegate.insertBefore(e,n,o,r)}removeChild(e,n,o){this.delegate.removeChild(e,n,o)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,o,r){this.delegate.setAttribute(e,n,o,r)}removeAttribute(e,n,o){this.delegate.removeAttribute(e,n,o)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,o,r){this.delegate.setStyle(e,n,o,r)}removeStyle(e,n,o){this.delegate.removeStyle(e,n,o)}setProperty(e,n,o){this.shouldReplay(n)&&this.replay.push(r=>r.setProperty(e,n,o)),this.delegate.setProperty(e,n,o)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,o){return this.shouldReplay(n)&&this.replay.push(r=>r.listen(e,n,o)),this.delegate.listen(e,n,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(en)}};function Le(t="animations"){return N("NgAsyncAnimations"),v([{provide:k,useFactory:(e,n,o)=>new tn(e,n,o,t),deps:[O,W,m]},{provide:I,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ue={providers:[Ce({timeOut:5e3,preventDuplicates:!0}),de(Re,pe(),me()),H(()=>K({projectId:"tp2clinica",appId:"1:798331900574:web:9134b7ba2eb8310660618f",storageBucket:"tp2clinica.appspot.com",apiKey:"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",authDomain:"tp2clinica.firebaseapp.com",messagingSenderId:"798331900574"})),we(()=>Me()),H(()=>K({projectId:"tp2clinica",appId:"1:798331900574:web:9134b7ba2eb8310660618f",storageBucket:"tp2clinica.appspot.com",apiKey:"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",authDomain:"tp2clinica.firebaseapp.com",messagingSenderId:"798331900574"})),ke(()=>Ne()),xe(),Le(),oe(ce,he.initializeApp(Oe.firebase),fe),{provide:ye,useValue:"6LfwMoEqAAAAAPR_rdapYQyJ7aZV5Ll6Q30DLVJD"}]};var Be=(()=>{let e=class e{constructor(){this.title="clinica"}prepareRoute(o){return o&&o.activatedRouteData&&o.activatedRouteData.animation}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:4,vars:1,consts:[["outlet","outlet"]],template:function(r,s){if(r&1&&(h(0,"router-outlet"),c(1,"div"),h(2,"router-outlet",null,0),l()),r&2){let u=se(3);re(),ie("@routeAnimations",s.prepareRoute(u))}},dependencies:[le],data:{animation:[Ie("routeAnimations",[y("bienvenidoLogin <=> login",[a({position:"relative"}),i(":enter, :leave",[a({position:"absolute",width:"100%"})],{optional:!0}),i(":enter",[a({transform:"translateY(100%)",opacity:0})],{optional:!0}),C([i(":leave",[p("300ms ease-out",a({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),i(":enter",[p("300ms ease-out",a({transform:"translateY(0)",opacity:1}))],{optional:!0})])]),y("login <=> bienvenido",[a({position:"relative"}),i(":enter, :leave",[a({position:"absolute",width:"100%"})],{optional:!0}),i(":enter",[a({transform:"translateY(100%)",opacity:0})],{optional:!0}),C([i(":leave",[p("300ms ease-out",a({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),i(":enter",[p("300ms ease-out",a({transform:"translateY(0)",opacity:1}))],{optional:!0})])]),y("bievenido<=>bienvenidoLogin1",[a({position:"relative"}),i(":enter, :leave",[a({position:"absolute",width:"100%"})],{optional:!0}),i(":enter",[a({transform:"scale(0.8)",opacity:0})],{optional:!0}),C([i(":leave",[p("900ms ease-out",a({transform:"scale(1.2)",opacity:0}))],{optional:!0}),i(":enter",[p("900ms ease-out",a({transform:"scale(1)",opacity:1}))],{optional:!0})])]),y("bienvenido <=> perfil",[a({position:"relative"}),i(":enter, :leave",[a({position:"absolute",width:"100%"})],{optional:!0}),i(":enter",[a({transform:"translateX(100%)",opacity:0})],{optional:!0}),C([i(":leave",[p("300ms ease-out",a({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),i(":enter",[p("300ms ease-out",a({transform:"translateX(0)",opacity:1}))],{optional:!0})])])])]}});let t=e;return t})();var ze={production:!1,firebase:{apiKey:"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",authDomain:"tp2clinica.firebaseapp.com",projectId:"tp2clinica",storageBucket:"tp2clinica.appspot.com",messagingSenderId:"798331900574",appId:"1:798331900574:web:9134b7ba2eb8310660618f"}};ue(Be,Ue).catch(t=>console.error(t));ze.production&&void 0;
