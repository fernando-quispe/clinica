import{v as p,x as u,z as P}from"./chunk-HAULGCLZ.js";import{O as c,U as h,Z as s,a as f,n}from"./chunk-VP7AJPYJ.js";import{a}from"./chunk-SO6VPFYA.js";var U=(()=>{let e=class e{constructor(i,t,r){this.afAuth=i,this.afs=t,this.unUsuario=r,this.suscriptionList=new f,this.listUsuario=[],this.listPerfil=[],this.estePerfil="Paciente",this.user$=this.afAuth.authState.pipe(c(l=>l?this.afs.doc(`users/${l.uid}`).valueChanges():n(null)))}perfilBuscado(){let i=JSON.parse(localStorage.getItem("userPerfil"));return this.perfil=i,console.log("Imprimo Perfil Leido:",this.perfil),this.perfil}obtener_localstorage(){let i=JSON.parse(localStorage.getItem("user"));this.email=i.email,console.log("Service Paciente correo: ",this.email)}getPerfil(){return this.obtener_localstorage(),this.unUsuario.getPerfilUsuario(this.email).subscribe(i=>{i.forEach(r=>{this.listPerfil.push(a({id:r.payload.doc.id},r.payload.doc.data()))});let t={perfil:this.listPerfil[0].perfil,apellido:this.listPerfil[0].apellido,nombre:this.listPerfil[0].nombre,dni:this.listPerfil[0].dni,email:this.listPerfil[0].email,aprobadoPorAdmin:this.listPerfil[0].aprobadoPorAdmin,especialidad:this.listPerfil[0].especialidad,otraEspecialidad:this.listPerfil[0].otraEspecialidad,fotoPerfilUno:this.listPerfil[0].fotoPerfilUno,fotoPerfilDos:this.listPerfil[0].fotoPerfilDos};this.gralPerfil=t.perfil,console.log("Gral Perfil - var ",this.listPerfil[0].perfil)}),this.gralPerfil}isActualSessionPaciente(){let i=this.estePerfil;return console.log("Imprimo Perfil esperado Paciente:",i),i==="Paciente"?(console.log("Paso 7 auth Servicio Paciente - perfil  ",this.perfil),!0):(console.log("Paso 8 auth Servicio Paciente -  NO",this.perfil),!1)}};e.\u0275fac=function(t){return new(t||e)(s(p),s(u),s(P))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{U as a};
