import{a as Oe,b as Ue}from"./chunk-K7QLWUFB.js";import{a as Me}from"./chunk-NATQ5JXN.js";import"./chunk-3PKXA2GJ.js";import{a as se}from"./chunk-UW5ILXPT.js";import{a as De,b as ce,c as je}from"./chunk-7N4I4LOP.js";import{a as ke}from"./chunk-5UAUDW77.js";import{a as y,b as Te,f as Ae,g as Le}from"./chunk-NWAIKNBB.js";import{A as E,C as re,D as I,E as oe,F as Se,G as Ee,H as Ie,I as ye,J as Pe,K as we,N as Fe,O as ae,P as le,f as S,j as fe,v as N,x as ne,z as O}from"./chunk-RPMULKYW.js";import{Ab as Z,Cb as xe,Db as _e,Eb as Ce,Gb as _,Ib as ee,Jb as te,Ma as j,Pa as l,Qa as f,U as D,V as W,Z as J,a as M,da as x,ea as Y,eb as u,fc as F,ga as ve,gb as d,gc as C,ic as ie,kb as e,lb as r,ma as Q,mb as m,na as A,oa as L,pb as R,r as be,rb as b,sb as v,ub as K,xb as a,yb as h,zb as U}from"./chunk-2R5RJSOK.js";import"./chunk-WH4R2YDQ.js";import"./chunk-YT5AF7SN.js";import{a as T,b as ge,f as he,h as $}from"./chunk-SIAVTO45.js";var Ge=he(Te());function Qe(i,n){i&1&&(e(0,"div",3),m(1,"app-spinner"),r())}function Ke(i,n){i&1&&(e(0,"span",22),a(1," El Nombre "),e(2,"strong"),a(3,"es requerido"),r()())}function Ze(i,n){i&1&&(e(0,"span",22),a(1," Nombre como m\xEDnimo "),e(2,"strong"),a(3,"debe tener 4 caracteres"),r()())}function et(i,n){i&1&&(e(0,"span",22),a(1," El Apellido "),e(2,"strong"),a(3,"es requerido"),r()())}function tt(i,n){i&1&&(e(0,"span",22),a(1," El Apellido como m\xEDnimo "),e(2,"strong"),a(3,"debe tener 4 caracteres"),r()())}function it(i,n){i&1&&(e(0,"span",22),a(1," La Edad "),e(2,"strong"),a(3,"es requerida"),r()())}function nt(i,n){i&1&&(e(0,"span",22),a(1," La Edad como m\xEDnimo "),e(2,"strong"),a(3,"debe tener 22 a\xF1os"),r()())}function rt(i,n){i&1&&(e(0,"span",22),a(1," El DNI "),e(2,"strong"),a(3,"es requerido"),r()())}function ot(i,n){i&1&&(e(0,"span",22),a(1," El DNI como m\xEDnimo "),e(2,"strong"),a(3,"debe tener 6 d\xEDgitos"),r()())}function at(i,n){i&1&&(e(0,"span",22),a(1," El correo electr\xF3nico"),e(2,"strong"),a(3,"es requerido"),r()())}function lt(i,n){i&1&&(e(0,"span",22),a(1," El correo electr\xF3nico"),e(2,"strong"),a(3,"es inv\xE1lido"),r()())}function st(i,n){i&1&&(e(0,"span",22),a(1," La Foto del Perfil "),e(2,"strong"),a(3,"es requerida"),r()())}function ct(i,n){i&1&&(e(0,"span",22),a(1," La contrase\xF1a "),e(2,"strong"),a(3,"es requerida"),r()())}function mt(i,n){i&1&&(e(0,"span",22),a(1," La contrase\xF1a como m\xEDnimo "),e(2,"strong"),a(3,"debe tener 6 caracteres"),r()())}function dt(i,n){i&1&&(e(0,"span",22),a(1," Las Contrase\xF1as "),e(2,"strong"),a(3,"son distintas"),r()())}function pt(i,n){if(i&1){let c=R();e(0,"div",4)(1,"h2",5),a(2,"REGISTRO DE ADMINISTRADOR"),r(),e(3,"form",6),b("ngSubmit",function(){A(c);let t=v();return L(t.registrar())}),e(4,"div",7)(5,"div",8),m(6,"input",9),u(7,Ke,4,0,"span",10)(8,Ze,4,0,"span",10),r(),e(9,"div",8),m(10,"input",11),u(11,et,4,0,"span",10)(12,tt,4,0,"span",10),r(),e(13,"div",8),m(14,"input",12),u(15,it,4,0,"span",10)(16,nt,4,0,"span",10),r(),e(17,"div",8),m(18,"input",13),u(19,rt,4,0,"span",10)(20,ot,4,0,"span",10),r(),e(21,"div",8),m(22,"input",14),u(23,at,4,0,"span",10)(24,lt,4,0,"span",10),r(),e(25,"div",15)(26,"span",16),a(27,"PERFIL"),r(),e(28,"input",17),b("change",function(t){A(c);let s=v();return L(s.uploadImage(t))}),r(),u(29,st,4,0,"span",10),r(),e(30,"div",8),m(31,"input",18),u(32,ct,4,0,"span",10)(33,mt,4,0,"span",10),r(),e(34,"div",8),m(35,"input",19),u(36,dt,4,0,"span",10),r()(),e(37,"button",20),b("click",function(){A(c);let t=v();return L(t.volver())}),a(38,"Volver"),r(),e(39,"button",21),a(40,"Aceptar"),r()()()}if(i&2){let c,o,t,s,p,w,k,V,q,H,z,B,X,g=v();l(3),d("formGroup",g.registrarForm),l(4),d("ngIf",((c=g.registrarForm.get("nombre"))==null?null:c.hasError("required"))&&((c=g.registrarForm.get("nombre"))==null?null:c.touched)),l(),d("ngIf",((o=g.registrarForm.get("nombre"))==null?null:o.hasError("minlength"))&&((o=g.registrarForm.get("nombre"))==null?null:o.touched)),l(3),d("ngIf",((t=g.registrarForm.get("apellido"))==null?null:t.hasError("required"))&&((t=g.registrarForm.get("apellido"))==null?null:t.touched)),l(),d("ngIf",((s=g.registrarForm.get("apellido"))==null?null:s.hasError("minlength"))&&((s=g.registrarForm.get("apellido"))==null?null:s.touched)),l(3),d("ngIf",((p=g.registrarForm.get("edad"))==null?null:p.hasError("required"))&&((p=g.registrarForm.get("edad"))==null?null:p.touched)),l(),d("ngIf",((w=g.registrarForm.get("edad"))==null?null:w.hasError("minlength"))&&((w=g.registrarForm.get("edad"))==null?null:w.touched)),l(3),d("ngIf",((k=g.registrarForm.get("dni"))==null?null:k.hasError("required"))&&((k=g.registrarForm.get("dni"))==null?null:k.touched)),l(),d("ngIf",((V=g.registrarForm.get("dni"))==null?null:V.hasError("minlength"))&&((V=g.registrarForm.get("dni"))==null?null:V.touched)),l(3),d("ngIf",((q=g.registrarForm.get("correo"))==null?null:q.hasError("required"))&&((q=g.registrarForm.get("correo"))==null?null:q.touched)),l(),d("ngIf",((H=g.registrarForm.get("correo"))==null?null:H.hasError("email"))&&((H=g.registrarForm.get("correo"))==null?null:H.touched)),l(5),d("ngIf",((z=g.registrarForm.get("fotoPerfil"))==null?null:z.hasError("required"))&&((z=g.registrarForm.get("fotoPerfil"))==null?null:z.touched)),l(3),d("ngIf",((B=g.registrarForm.get("password"))==null?null:B.hasError("required"))&&((B=g.registrarForm.get("password"))==null?null:B.touched)),l(),d("ngIf",((X=g.registrarForm.get("password"))==null?null:X.hasError("minlength"))&&((X=g.registrarForm.get("password"))==null?null:X.touched)),l(3),d("ngIf",g.registrarForm.hasError("notSame")),l(3),d("disabled",g.registrarForm.invalid)}}var de=(()=>{let n=class n{constructor(o,t,s,p,w,k){this.fb=o,this.afAuth=t,this.router=s,this.toastr=p,this._errorService=w,this._usuarioService=k,this.loading=!1,this.suscriptionList=new M,this.registrarForm=this.fb.group({nombre:["",[I.required,I.minLength(4)]],apellido:["",[I.required,I.minLength(4)]],edad:["",[I.required,I.minLength(2)]],dni:["",[I.required,I.minLength(6)]],fotoPerfil:["no la guardo aun",[I.required]],correo:["",[I.required,I.email]],password:["",[I.required,I.minLength(6)]],repetirPassword:[""]},{validator:this.ckeckPassword})}ngOnInit(){}registrar(){this.registrarAdministrador(),this.router.navigate(["bienvenidoLogin"])}registrarAdministrador(){return $(this,null,function*(){let o={nombre:this.registrarForm.get("nombre")?.value,apellido:this.registrarForm.get("apellido")?.value,edad:this.registrarForm.get("edad")?.value,dni:this.registrarForm.get("dni")?.value,obraSocial:null,especialidad:null,otraEspecialidad:"",email:this.registrarForm.get("correo")?.value,password:this.registrarForm.get("password")?.value,perfil:"Administrador",fotoPerfilUno:this.obtengoFile,fotoPerfilDos:null,aprobadoPorAdmin:"NO",baja:"NO",altura:"",peso:"",temperatura:"",presion:"",clave1:"",valor1:"",clave2:"",valor2:"",clave3:"",valor3:""};try{this.loading=!0;let t=this.registrarForm.get("correo")?.value,s=this.registrarForm.get("password")?.value;yield this.afAuth.createUserWithEmailAndPassword(t,s),yield(yield this.afAuth.currentUser).sendEmailVerification(),console.log(this.afAuth),this.afAuth&&(this._usuarioService.crearUsuario(o),Ge.default.fire({position:"top-end",icon:"success",title:"Verifique su correo electr\xF3nico para autenticar el Alta del Usuario Administrador.",showConfirmButton:!1,timer:5e3}),this.loading=!1)}catch(t){this.toastr.error(this._errorService.error(t.code),"Error - Paciente"),setTimeout(()=>{this.toastr.error(this._errorService.error(t.code),"Error - Paciente")},6e3)}})}uploadImage(o){let t=o.target.files[0];this.obtengoFile="assets/admin/"+t.name}ckeckPassword(o){let t=o.controls.password?.value,s=o.controls.repetirPassword?.value;return t===s?null:{notSame:!0}}ngOnDestroy(){this.suscriptionList.unsubscribe()}volver(){this.router.navigateByUrl("/bienvenido")}};n.\u0275fac=function(t){return new(t||n)(f(Fe),f(N),f(S),f(Me),f(Oe),f(O))},n.\u0275cmp=x({type:n,selectors:[["app-generar-usuario-admin"]],standalone:!0,features:[_],decls:10,vars:2,consts:[[1,"conteiner"],["class","d-flex justify-content-center mt-5",4,"ngIf"],["class","col-md-12 mb-2",4,"ngIf"],[1,"d-flex","justify-content-center","mt-5"],[1,"col-md-12","mb-2"],[1,"text-center","tituloPropio"],[3,"ngSubmit","formGroup"],[1,"row","formulario"],[1,"col-md-6","mb-2"],["type","text","formControlName","nombre","placeholder","Nombre",1,"form-control","form-control-lg"],["class","text-danger",4,"ngIf"],["type","text","formControlName","apellido","placeholder","Apellido",1,"form-control","form-control-lg"],["type","number","formControlName","edad","placeholder","Edad",1,"form-control","form-control-lg"],["type","number","formControlName","dni","placeholder","DNI",1,"form-control","form-control-lg"],["type","email","formControlName","correo","placeholder","Correo",1,"form-control","form-control-lg"],[1,"col-md-6","input-group","mb-3"],[1,"input-group-text"],["type","file","formControlName","fotoPerfil",1,"form-control","form-control-lg",3,"change"],["type","password","formControlName","password","placeholder","Contrase\xF1a",1,"form-control","form-control-lg"],["type","password","formControlName","repetirPassword","placeholder","Repetir Contrase\xF1a",1,"form-control","form-control-lg"],["routerLink","/bienvenido",1,"btn","btn-secondary","btn-lg",3,"click"],["type","submit",1,"btn","btn-primary","btn-lg","float-right",3,"disabled"],[1,"text-danger"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,Qe,2,0,"div",1),m(3,"br")(4,"br")(5,"br")(6,"br")(7,"br")(8,"br"),u(9,pt,41,16,"div",2),r()),t&2&&(l(2),d("ngIf",s.loading),l(7),d("ngIf",!s.loading))},dependencies:[E,y,C,le,Ie,re,ye,oe,Se,Pe,we],styles:['.conteiner[_ngcontent-%COMP%]{background-image:url("./media/clinica03-5QTCLINU.jpg");display:flex;flex-direction:column;justify-content:center;align-items:center;height:95vh;background-size:100% auto;background-position:center top;background-repeat:no-repeat;max-width:90% auto;padding:5px}.form[_ngcontent-%COMP%]{width:100%;max-width:1000px;margin:40 auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.parrafoPropio[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-family:Montserrat,sans-serif}.tituloPropio[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}.text-danger[_ngcontent-%COMP%]{margin-left:10px}h2[_ngcontent-%COMP%]{color:#f5f0f0}.invalid[_ngcontent-%COMP%]{color:red}#star[_ngcontent-%COMP%]{font-size:300%!important}p.clasificacion[_ngcontent-%COMP%]{position:relative;overflow:hidden;display:inline-block}p.clasificacion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;top:-100px}p.clasificacion[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{float:right;color:#557b1d}p.clasificacion[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover, p.clasificacion[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover ~ label[_ngcontent-%COMP%], p.clasificacion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]{color:#852828}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;padding:.6rem 1.2rem;background-color:#0e8168;margin:.3rem .6rem;border-radius:.5rem;border:1px solid #666;color:#fff;filter:drop-shadow(0px 0px 2px#666);font-weight:400}div[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{align-items:center;margin-top:1.5rem;display:flex;padding:1rem 2rem;text-align:center;border-radius:.5rem;border:1px solid #666;filter:drop-shadow(0px 1px 2px #666);font-size:1rem;font-weight:700;letter-spacing:.5px;color:#fff;background-color:#7b1d1d}.colorTexto[_ngcontent-%COMP%]{color:#fff}']});let i=n;return i})();function ut(i,n){i&1&&(e(0,"div",6),m(1,"app-spinner"),r())}function ft(i,n){if(i&1){let c=R();e(0,"button",18),b("click",function(){A(c);let t=v().$implicit,s=v(2);return L(s.habilitarCuenta(t))}),a(1,"Habilitar"),r()}}function gt(i,n){if(i&1){let c=R();e(0,"button",19),b("click",function(){A(c);let t=v().$implicit,s=v(2);return L(s.deshabilitarCuenta(t))}),a(1,"Deshabilitar"),r()}}function ht(i,n){if(i&1&&(e(0,"tr",13)(1,"td",14),m(2,"img",15),a(3),r(),e(4,"td",14),a(5),r(),e(6,"td",14),a(7),r(),e(8,"td",14),a(9),r(),e(10,"td",14),a(11),r(),e(12,"td",14),u(13,ft,2,0,"button",16)(14,gt,2,0,"button",17),r()()),i&2){let c=n.$implicit;l(2),K("alt","Especialista ",c.nombre+" "+c.apellido,""),d("src","../../../"+c.fotoPerfilUno,j),l(),U(" ",c.nombre+" "+c.apellido," "),l(2),h(c.edad),l(2),h(c.dni),l(2),h(c.email),l(2),h(c.especialidad),l(2),d("ngIf",c.aprobadoPorAdmin=="NO"),l(),d("ngIf",c.aprobadoPorAdmin=="SI")}}function bt(i,n){if(i&1&&(e(0,"div",7)(1,"table",8)(2,"thead",9)(3,"tr",10)(4,"th",11),a(5,"Foto"),r(),e(6,"th",11),a(7,"Edad"),r(),e(8,"th",11),a(9,"Dni"),r(),e(10,"th",11),a(11,"Correo electr\xF3nico"),r(),e(12,"th",11),a(13,"Especialidad"),r(),e(14,"th",11),a(15,"Cuenta"),r()()(),e(16,"tbody"),u(17,ht,15,10,"tr",12),r()()()),i&2){let c=v();l(17),d("ngForOf",c.listaUsuarioEspecialista)}}var Re=(()=>{let n=class n{constructor(o,t,s){this.afAuth=o,this.router=t,this._usuarioService=s,this.listaUsuarioEspecialista=[],this.suscriptionList=new M,this.loading=!1}ngOnInit(){this.getList()}ngOnDestroy(){this.suscriptionList.unsubscribe()}getList(){this.suscriptionList==this._usuarioService.getListadoUsuario().subscribe(o=>{this.listaUsuarioEspecialista=[],o.forEach(t=>{this.listaUsuarioEspecialista.push(T({id:t.payload.doc.id},t.payload.doc.data()))}),this.listaUsuarioEspecialista=this.listaUsuarioEspecialista.filter(t=>t.perfil==="Especialista")})}habilitarCuenta(o){this._usuarioService.habilitarCuenta(o.id).then(t=>{})}deshabilitarCuenta(o){this._usuarioService.deshabilitarCuenta(o.id).then(t=>{})}seleccionar(o){}ngOnChanges(o){}volver(){this.router.navigateByUrl("/bienvenido")}};n.\u0275fac=function(t){return new(t||n)(f(N),f(S),f(O))},n.\u0275cmp=x({type:n,selectors:[["app-habilitar-inhabilitar-cuenta"]],standalone:!0,features:[Q,_],decls:10,vars:2,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"text-center","p-3"],["class","container-table table-responsive",4,"ngIf"],[1,"text-center"],["routerLink","/bienvenido",1,"btn","btn-secondary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"],[1,"container-table","table-responsive"],[1,"table","table-striped"],[1,"thead-Active"],[1,"table-dark"],["scope","col",1,"separador1"],["class","table-light",4,"ngFor","ngForOf"],[1,"table-light"],[1,"separador"],[3,"src","alt"],["class","btn-success",3,"click",4,"ngIf"],["class","btn-danger",3,"click",4,"ngIf"],[1,"btn-success",3,"click"],[1,"btn-danger",3,"click"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,ut,2,0,"div",1),m(3,"br"),e(4,"h3",2),a(5,"Habilitar cuenta a Especialista"),r(),u(6,bt,18,1,"div",3),e(7,"div",4)(8,"button",5),b("click",function(){return s.volver()}),a(9,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(4),d("ngIf",!s.loading))},dependencies:[E,y,C,F],styles:[".container-table[_ngcontent-%COMP%]{border:5 solid black}img[_ngcontent-%COMP%]{width:120px;height:120px;display:block;border-collapse:50%;box-shadow:2px 2px 5px #999}.scrollbar-especialidades[_ngcontent-%COMP%]{position:relative;height:9em;overflow:auto}@media (max-width: 520){td[_ngcontent-%COMP%]{font-size:10px!important}}.btn-success[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]{border-radius:5px;height:40px;font-size:17px;box-shadow:2px 2px 5px #999}.separador[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin:10px 0}.separador1[_ngcontent-%COMP%]{border-bottom:1px solid #474747;margin:10px 0}"]});let i=n;return i})();function vt(i,n){i&1&&(e(0,"div",12),m(1,"app-spinner"),r())}var Ve=(()=>{let n=class n{constructor(o,t){this._usuarioService=o,this.router=t,this.loading=!1}ngOnInit(){this.leerDatos()}leerDatos(){let o=JSON.parse(localStorage.getItem("perfil"));this.apellido=o.apellido,this.nombre=o.nombre,this.dni=o.dni,this.correo=o.email,this.perfil=o.perfil,this.foto1=o.fotoPerfilUno}volver(){this.router.navigateByUrl("/bienvenido")}};n.\u0275fac=function(t){return new(t||n)(f(O),f(S))},n.\u0275cmp=x({type:n,selectors:[["app-mi-perfil"]],standalone:!0,features:[_],decls:61,vars:6,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"mx-auto","container-info","table-responsive","text-center"],[1,"table"],[2,"background-color","#042035"],["alt","imagen de perfil",3,"src"],["WIDTH","20%"],["color","#ffffff;"],["WIDTH","10%"],["WIDTH","15%"],[1,"text-center"],["routerLink","/bienvenido",1,"btn","btn-secondary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,vt,2,0,"div",1),m(3,"br"),e(4,"div",2)(5,"h1"),a(6,"MI PERFIL"),r(),e(7,"table",3)(8,"thead")(9,"tr"),m(10,"th")(11,"th")(12,"th")(13,"th"),r()(),e(14,"tbody",4)(15,"tr")(16,"td"),m(17,"img",5),r(),e(18,"td",6)(19,"strong")(20,"font",7),a(21,"Apellido"),r()(),m(22,"br")(23,"br")(24,"br"),e(25,"font",7),a(26),r()(),m(27,"td"),e(28,"td",6)(29,"strong")(30,"font",7),a(31,"Nombre"),r()(),m(32,"br")(33,"br")(34,"br"),e(35,"font",7),a(36),r()(),m(37,"td"),e(38,"td",8)(39,"strong")(40,"font",7),a(41,"DNI"),r()(),m(42,"br")(43,"br")(44,"br"),e(45,"font",7),a(46),r()(),m(47,"td"),e(48,"td",9)(49,"strong")(50,"font",7),a(51,"Correo electr\xF3nico "),r()(),m(52,"br")(53,"br")(54,"br"),e(55,"font",7),a(56),r()(),m(57,"td"),r()()()(),e(58,"div",10)(59,"button",11),b("click",function(){return s.volver()}),a(60,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(15),d("src","../../../"+s.foto1,j),l(9),U("",s.apellido," "),l(10),U("",s.nombre," "),l(10),U("",s.dni," "),l(10),h(s.correo))},dependencies:[E,y,C],styles:["h3[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:160px;height:160px;border-collapse:50%;box-shadow:0 0 5px #999;margin:10px;display:flex}.container-info[_ngcontent-%COMP%]{box-shadow:0 0 10px #bdbdbd;padding:30px;border-radius:1%;text-align:center;align-items:center;width:90%}"]});let i=n;return i})();function xt(i,n){i&1&&(e(0,"div",7),m(1,"app-spinner"),r())}function _t(i,n){if(i&1&&(e(0,"p",18),a(1),r()),i&2){let c=v().$implicit;l(),Z("",c.clave1," : ",c.valor1,"")}}function Ct(i,n){if(i&1&&(e(0,"p",18),a(1),r()),i&2){let c=v().$implicit;l(),Z("",c.clave2," : ",c.valor2,"")}}function St(i,n){if(i&1&&(e(0,"p",18),a(1),r()),i&2){let c=v().$implicit;l(),Z("",c.clave3," : ",c.valor3,"")}}function Et(i,n){if(i&1&&(e(0,"tr",14)(1,"td",15),m(2,"img",16),a(3),r(),e(4,"td",15),a(5),r(),e(6,"td",15),a(7),r(),e(8,"td",15),a(9),r(),e(10,"td",15),a(11),r(),e(12,"td",15),a(13),r(),e(14,"td",15),u(15,_t,2,2,"p",17)(16,Ct,2,2,"p",17)(17,St,2,2,"p",17),r()()),i&2){let c=n.$implicit;l(2),K("alt","Especialista ",c.nombre+" "+c.apellido,""),d("src","../../../"+c.fotoPerfilUno,j),l(),U(" ",c.nombre+" "+c.apellido," "),l(2),h(c.edad),l(2),h(c.altura),l(2),h(c.peso),l(2),h(c.temperatura),l(2),h(c.presion),l(2),d("ngIf",c.valor1),l(),d("ngIf",c.valor2),l(),d("ngIf",c.valor3)}}function It(i,n){if(i&1&&(e(0,"div",8)(1,"table",9)(2,"thead",10)(3,"tr",11)(4,"th",12),a(5,"Foto"),r(),e(6,"th",12),a(7,"Edad"),r(),e(8,"th",12),a(9,"Altura"),r(),e(10,"th",12),a(11,"Peso"),r(),e(12,"th",12),a(13,"Temperatura"),r(),e(14,"th",12),a(15,"Presi\xF3n"),r(),e(16,"th",12),a(17,"Datos"),r()()(),e(18,"tbody"),u(19,Et,18,12,"tr",13),r()()()),i&2){let c=v();l(19),d("ngForOf",c.listaUsuarioPaciente)}}var qe=(()=>{let n=class n{constructor(o,t,s,p){this.afAuth=o,this.router=t,this._usuarioService=s,this.srvExcel=p,this.listaUsuarioPaciente=[],this.listaUsuarioPacienteExcel=[],this.suscriptionList=new M,this.loading=!1}ngOnInit(){this.getList()}ngOnDestroy(){this.suscriptionList.unsubscribe()}getList(){this.suscriptionList==this._usuarioService.getListadoUsuario().subscribe(o=>{console.log("Usuario Adm ",o),this.listaUsuarioPaciente=[],o.forEach(t=>{this.listaUsuarioPaciente.push(T({id:t.payload.doc.id},t.payload.doc.data())),this.listaUsuarioPaciente=this.listaUsuarioPaciente.filter(s=>s.perfil==="Paciente")})})}habilitarCuenta(o){this._usuarioService.habilitarCuenta(o.id).then(t=>{})}deshabilitarCuenta(o){this._usuarioService.deshabilitarCuenta(o.id).then(t=>{})}seleccionar(o){}ngOnChanges(o){}exportexcel(){return $(this,null,function*(){for(let t=0;t<this.listaUsuarioPaciente.length;t++){console.log(" Elemt ",this.listaUsuarioPaciente[t]);let s={apellido:this.listaUsuarioPaciente[t].apellido,nombre:this.listaUsuarioPaciente[t].nombre,dni:this.listaUsuarioPaciente[t].dni,edad:this.listaUsuarioPaciente[t].edad,obraSocial:this.listaUsuarioPaciente[t].obraSocial,altura:this.listaUsuarioPaciente[t].altura,peso:this.listaUsuarioPaciente[t].peso,presion:this.listaUsuarioPaciente[t].presion,temperatura:this.listaUsuarioPaciente[t].temperatura,clave1:this.listaUsuarioPaciente[t].clave1,valor1:this.listaUsuarioPaciente[t].valor1,clave2:this.listaUsuarioPaciente[t].clave2,valor2:this.listaUsuarioPaciente[t].valor2,clave3:this.listaUsuarioPaciente[t].clave3,valor3:this.listaUsuarioPaciente[t].valor3,perfil:this.listaUsuarioPaciente[t].perfil};this.listaUsuarioPacienteExcel.push(s)}let o=this.listaUsuarioPacienteExcel;this.srvExcel.exportar_ArrayObjetos_toExcel(o,"Usuarios-Pacientes","Hoja 1")})}volver(){this.router.navigateByUrl("/bienvenido")}};n.\u0275fac=function(t){return new(t||n)(f(N),f(S),f(O),f(je))},n.\u0275cmp=x({type:n,selectors:[["app-usuarios"]],standalone:!0,features:[Q,_],decls:16,vars:2,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"text-center","p-3"],[1,"box","text-center"],[1,"btn","btn-primary","btn-lg","float-right",3,"click"],["class","container-table table-responsive",4,"ngIf"],["routerLink","/bienvenido",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"],[1,"container-table","table-responsive"],[1,"table","table-striped"],[1,"thead-Active"],[1,"table-dark"],["scope","col",1,"separador1"],["class","table-light",4,"ngFor","ngForOf"],[1,"table-light"],[1,"separador"],[3,"src","alt"],["class","btn-success",4,"ngIf"],[1,"btn-success"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,xt,2,0,"div",1),m(3,"br"),e(4,"h3",2),a(5,"Datos de los Usuarios"),r(),e(6,"div",3)(7,"button",4),b("click",function(){return s.exportexcel()}),a(8,"Descargar EXCEL - Pacientes"),r()(),m(9,"br")(10,"br")(11,"br"),u(12,It,20,1,"div",5),e(13,"div",3)(14,"button",6),b("click",function(){return s.volver()}),a(15,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(10),d("ngIf",!s.loading))},dependencies:[E,y,C,F],styles:[".container-table[_ngcontent-%COMP%]{border:5 solid black}img[_ngcontent-%COMP%]{width:120px;height:120px;display:block;border-collapse:50%;box-shadow:2px 2px 5px #999}.scrollbar-especialidades[_ngcontent-%COMP%]{position:relative;height:9em;overflow:auto}@media (max-width: 520){td[_ngcontent-%COMP%]{font-size:10px!important}}.btn-success[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]{border-radius:5px;height:40px;font-size:17px;box-shadow:2px 2px 5px #999}.box[_ngcontent-%COMP%]{border:0px solid darkblue;width:100%}.separador[_ngcontent-%COMP%]{border-bottom:1px solid #b4b4b4;margin:10px 0}.separador1[_ngcontent-%COMP%]{border-bottom:1px solid #474747;margin:10px 0}"]});let i=n;return i})();var Be=he(Te());var He=(()=>{let n=class n{transform(o,t){if(t===""||t.length<3)return o;let s=[];for(let p of o)(p.especialidad.toLowerCase().indexOf(t.toLowerCase())>-1||p.nombre.toLowerCase().indexOf(t.toLowerCase())>-1||p.apellido.toLowerCase().indexOf(t.toLowerCase())>-1||p.nombre.toLowerCase().indexOf(t.toLowerCase())>-1||p.email.toLowerCase().indexOf(t.toLowerCase())>-1||p.otraespecialidad.toLowerCase().indexOf(t.toLowerCase())>-1||p.estado.toLowerCase().indexOf(t.toLowerCase())>-1||p.turno.toLowerCase().indexOf(t.toLowerCase())>-1||p.dia.toLowerCase().indexOf(t.toLowerCase())>-1)&&s.push(p);return s}};n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=ve({name:"filterTurnoclinica",type:n,pure:!0,standalone:!0});let i=n;return i})();var ze=(()=>{let n=class n{constructor(o){this.firestore=o}getIngresos(){return this.firestore.collection("turnos").valueChanges()}};n.\u0275fac=function(t){return new(t||n)(J(ne))},n.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();function wt(i,n){i&1&&(e(0,"div",10),m(1,"app-spinner"),r())}function Ft(i,n){if(i&1&&(e(0,"tr",17)(1,"td",18),a(2),r(),e(3,"td",18),a(4),r(),e(5,"td",18),a(6),r(),e(7,"td",18),a(8),r(),e(9,"td",18),a(10),r(),e(11,"td",18),a(12),r(),e(13,"td",18),a(14),r(),e(15,"td",18),a(16),r()()),i&2){let c=n.$implicit;l(2),h(c.email),l(2),h(c.nombre),l(2),h(c.apellido),l(2),h(c.especialidad),l(2),h(c.otraespecialidad),l(2),h(c.estado),l(2),h(c.dia),l(2),h(c.turno)}}function Ot(i,n){if(i&1&&(e(0,"div",11)(1,"table",12)(2,"thead",13)(3,"tr",14)(4,"th",15),a(5,"Email"),r(),e(6,"th",15),a(7,"Nombre"),r(),e(8,"th",15),a(9,"Apellido"),r(),e(10,"th",15),a(11,"Especialidad"),r(),e(12,"th",15),a(13,"Otra Especialidad"),r(),e(14,"th",15),a(15,"Estado"),r(),e(16,"th",15),a(17,"Dia"),r(),e(18,"th",15),a(19,"Turno"),r()()(),e(20,"tbody"),u(21,Ft,17,8,"tr",16),ee(22,"filterTurnoclinica"),r()()()),i&2){let c=v();l(21),d("ngForOf",te(22,1,c.turnos,c.filterPost))}}var pe=(()=>{let n=class n{constructor(o,t,s,p){this._usuarioService=o,this._turnopacienteService=t,this.router=s,this.turnosclinicaService=p,this.listaTurnoPaciente=[],this.listaUsuarioPaciente=[],this.especialistas=[],this.listaTurnoPacientes=[],this.suscriptionList=new M,this.loading=!1,this.activarCancelar=!1,this.activarFinalizar=!1,this.activarHistoriaClinica=!1,this.activarVerResena=!1,this.filterPost="",this.turnos=[],this.filtroNombre="",this.filtroEspecialidad=""}ngOnInit(){this.obtener_localstorage(),this.getList(),this.getListaEspecialistas(),this.turnosclinicaService.getIngresos().subscribe(o=>{this.turnos=o,this.loading=!1})}ngOnDestroy(){this.suscriptionList.unsubscribe()}obtener_localstorage(){let o=JSON.parse(localStorage.getItem("perfil"));this.apellidoPaciente=o.apellido,this.nombrePaciente=o.nombre,this.emailEspecialista=o.email,this.fotoPerfilUnoPaciente=o.fotoPerfilUno,this.fotoPerfilDosPaciente=o.fotoPerfilDos,this.dniPaciente=o.dni}getListaEspecialistas(){return this._usuarioService.getEspecialidades().pipe(be(o=>o.map(t=>T({id:t.payload.doc.id},t.payload.doc.data()))))}getList(){this._usuarioService.getListaEspecialistas().subscribe(o=>{this.especialistas=o,this.especialistas.forEach(t=>{this._usuarioService.getTurnoEspecialista(t.email).subscribe(s=>{s.forEach(p=>{this.listaTurnoPacientes.push(ge(T({id:p.payload.doc.id},p.payload.doc.data()),{especialista:t.nombre}))})})}),console.log("Lista de Turnos: ",this.listaTurnoPacientes)})}cancelarTurno(o){this.activarCancelar=!0,this.actualTurno=o}finalizadaAtencion(o){this.activarFinalizar=!0,this.actualTurno=o}aceptarTurno(o){this._usuarioService.aceptarTurnoEspecialista(o.id,"ACEPTADO").then(t=>{}),Be.default.fire({position:"top-end",icon:"success",title:"Turno fue ACEPTADO con \xE9xito.",showConfirmButton:!1,timer:5e3})}guardarHistoriaClinica(o){this.activarHistoriaClinica=!0,this.actualTurno=o}verResena(o){this.activarVerResena=!0,this.actualTurno=o}volver(){this.router.navigateByUrl("/bienvenido")}turnosFiltrados(){return this.turnos.filter(o=>(this.filtroNombre?o.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()):!0)&&(this.filtroEspecialidad?o.especialidad.toLowerCase().includes(this.filtroEspecialidad.toLowerCase()):!0))}};n.\u0275fac=function(t){return new(t||n)(f(O),f(ke),f(S),f(ze))},n.\u0275cmp=x({type:n,selectors:[["app-turnosclinica"]],standalone:!0,features:[_],decls:14,vars:3,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"text-center","p-3"],[1,"row"],[1,"col"],[1,"form-group"],["type","text","name","filterPos","placeholder","Buscador ... [ Especialidad/Nombre/Apellido/Email/Estado/Dia/Turno]",1,"form-control",3,"ngModelChange","ngModel"],["class","container-table table-responsive",4,"ngIf"],[1,"box","text-center"],["routerLink","/bienvenido",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"],[1,"container-table","table-responsive"],[1,"table","table-striped"],[1,"thead-Active"],[1,"table-dark"],["scope","col"],["class","table-light",4,"ngFor","ngForOf"],[1,"table-light"],[1,"separador"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,wt,2,0,"div",1),m(3,"br"),e(4,"h3",2),a(5,"Listado de Turnos"),r(),e(6,"div",3)(7,"div",4)(8,"div",5)(9,"input",6),Ce("ngModelChange",function(w){return _e(s.filterPost,w)||(s.filterPost=w),w}),r()()()(),u(10,Ot,23,4,"div",7),e(11,"div",8)(12,"button",9),b("click",function(){return s.volver()}),a(13,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(7),xe("ngModel",s.filterPost),l(),d("ngIf",!s.loading))},dependencies:[E,y,C,F,ae,re,oe,Ee,He],styles:[".container-table[_ngcontent-%COMP%]{border:5 solid black}img[_ngcontent-%COMP%]{width:120px;height:120px;display:block;border-collapse:50%;box-shadow:2px 2px 5px #999}.scrollbar-especialidades[_ngcontent-%COMP%]{position:relative;height:9em;overflow:auto}@media (max-width: 520){td[_ngcontent-%COMP%]{font-size:10px!important}}.btn-success[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]{border-radius:5px;height:40px;font-size:17px;box-shadow:2px 2px 5px #999}.datos-turno[_ngcontent-%COMP%]{margin-bottom:.5rem;border-radius:5px;text-align:center}"]});let i=n;return i})();function Mt(i,n){i&1&&(e(0,"div",6),m(1,"app-spinner"),r())}function Ut(i,n){if(i&1&&(e(0,"tr")(1,"td"),a(2),r(),e(3,"td"),a(4),ee(5,"customDate"),r()()),i&2){let c=n.$implicit;l(2),h(c.userId),l(2),h(te(5,2,c.timestamp,"fullDate"))}}var ue=(()=>{let n=class n{constructor(o,t){this.logService=o,this.router=t,this.logs=[],this.loading=!1}ngOnInit(){this.logService.getLogs().subscribe(o=>{this.logs=o})}volver(){this.router.navigateByUrl("/bienvenido")}};n.\u0275fac=function(t){return new(t||n)(f(Ue),f(S))},n.\u0275cmp=x({type:n,selectors:[["app-log-report"]],standalone:!0,features:[_],decls:24,vars:2,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"mx-auto","container-info","table-responsive","text-center"],[4,"ngFor","ngForOf"],[1,"text-center"],["routerLink","/bienvenido",1,"btn","btn-secondary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,Mt,2,0,"div",1),m(3,"br"),e(4,"div",2)(5,"h2"),a(6,"INGRESOS DE USUARIOS"),r(),e(7,"table")(8,"thead")(9,"tr")(10,"th")(11,"h3"),a(12,"ID USUARIO\xA0\xA0\xA0\xA0\xA0"),r()(),e(13,"th")(14,"h3"),a(15,"DIA Y HORA\xA0\xA0\xA0\xA0\xA0"),r()(),e(16,"th")(17,"h3"),a(18,"ACCION"),r()()()(),e(19,"tbody"),u(20,Ut,6,5,"tr",3),r()()(),e(21,"div",4)(22,"button",5),b("click",function(){return s.volver()}),a(23,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(18),d("ngForOf",s.logs))},dependencies:[F,C,ie,Ae,y,E],styles:["h3[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:160px;height:160px;border-collapse:50%;box-shadow:0 0 5px #999;margin:10px;display:flex}.container-info[_ngcontent-%COMP%]{box-shadow:0 0 10px #bdbdbd;padding:30px;border-radius:1%;text-align:center;align-items:center;width:90%}"]});let i=n;return i})();var Xe=(()=>{let n=class n{constructor(o){this.firestore=o}getIngresos(){return this.firestore.collection("ingresos").valueChanges()}};n.\u0275fac=function(t){return new(t||n)(J(ne))},n.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var $e=(()=>{let n=class n{constructor(){}exportAsExcel(o,t){let s=ce.json_to_sheet(o),p=ce.book_new();ce.book_append_sheet(p,s,"Data"),De(p,t+"xlsx")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();function Lt(i,n){i&1&&(e(0,"div",7),m(1,"app-spinner"),r())}function kt(i,n){if(i&1&&(e(0,"tr",14)(1,"td",15),a(2),r(),e(3,"td",15),a(4),r(),e(5,"td",15),a(6),r()()),i&2){let c=n.$implicit;l(2),h(c.email),l(2),h(c.fecha),l(2),h(c.hora)}}function Dt(i,n){if(i&1&&(e(0,"div",8)(1,"table",9)(2,"thead",10)(3,"tr",11)(4,"th",12),a(5,"Email"),r(),e(6,"th",12),a(7,"Fecha"),r(),e(8,"th",12),a(9,"Hora"),r()()(),e(10,"tbody"),u(11,kt,7,3,"tr",13),r()()()),i&2){let c=v();l(11),d("ngForOf",c.ingresos)}}var We=(()=>{let n=class n{constructor(o,t,s){this.ingresosService=o,this.router=t,this.excelService=s,this.ingresos=[],this.loading=!0}ngOnInit(){this.ingresosService.getIngresos().subscribe(o=>{this.ingresos=o,this.loading=!1})}obtenerFechaYHora(o){let t=new Date(o),s=t.toLocaleDateString(),p=t.toLocaleTimeString();return{dia:s,hora:p}}volver(){this.router.navigateByUrl("/bienvenido")}downloadExcel(){this.excelService.exportAsExcel(this.ingresos,"ingresos.")}};n.\u0275fac=function(t){return new(t||n)(f(Xe),f(S),f($e))},n.\u0275cmp=x({type:n,selectors:[["app-ingresos"]],standalone:!0,features:[_],decls:16,vars:2,consts:[[1,"conteiner","mt-3"],["class","d-flex justify-content-center mt-5",4,"ngIf"],[1,"text-center","p-3"],[1,"box","text-center"],[1,"btn","btn-primary","btn-lg","float-right",3,"click"],["class","container-table table-responsive",4,"ngIf"],["routerLink","/bienvenido",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-flex","justify-content-center","mt-5"],[1,"container-table","table-responsive"],[1,"table","table-striped"],[1,"thead-Active"],[1,"table-dark"],["scope","col",1,"separador1"],["class","table-light",4,"ngFor","ngForOf"],[1,"table-light"],[1,"separador"]],template:function(t,s){t&1&&(m(0,"app-menu-gral"),e(1,"div",0),u(2,Lt,2,0,"div",1),m(3,"br"),e(4,"h3",2),a(5,"Lista de Ingresos"),r(),e(6,"div",3)(7,"button",4),b("click",function(){return s.downloadExcel()}),a(8,"Exportar a Excel"),r()(),m(9,"br")(10,"br")(11,"br"),u(12,Dt,12,1,"div",5),e(13,"div",3)(14,"button",6),b("click",function(){return s.volver()}),a(15,"Volver"),r()()()),t&2&&(l(2),d("ngIf",s.loading),l(10),d("ngIf",!s.loading))},dependencies:[C,F,E,y],styles:[".container-table[_ngcontent-%COMP%]{border:5 solid black}img[_ngcontent-%COMP%]{width:120px;height:120px;display:block;border-collapse:50%;box-shadow:2px 2px 5px #999}.scrollbar-especialidades[_ngcontent-%COMP%]{position:relative;height:9em;overflow:auto}@media (max-width: 520){td[_ngcontent-%COMP%]{font-size:10px!important}}.btn-success[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]{border-radius:5px;height:40px;font-size:17px;box-shadow:2px 2px 5px #999}.box[_ngcontent-%COMP%]{border:0px solid darkblue;width:100%}.separador[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin:10px 0}.separador1[_ngcontent-%COMP%]{border-bottom:1px solid #474747;margin:10px 0}"]});let i=n;return i})();var jt=[{path:"genUsAdmin",component:de},{path:"habEsp",component:Re},{path:"perfilAdm",component:Ve},{path:"usuariosAdmin",component:qe},{path:"misTurnosAdm",component:se},{path:"turnosclinica",component:pe},{path:"logReporte",component:ue},{path:"ingresos",component:We},{path:"",redirectTo:"bienvenidoLogin",pathMatch:"full"},{path:"**",pathMatch:"full",redirectTo:"bienvenidoLogin"}],Je=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Y({type:n}),n.\u0275inj=W({imports:[fe.forChild(jt),fe]});let i=n;return i})();var rn=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Y({type:n}),n.\u0275inj=W({imports:[ie,Je,Le,ae,le,de,se,pe,ue]});let i=n;return i})();export{rn as AdminModule};