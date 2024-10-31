export class Usuario {
    //[x: string]: any;
    nombre: string;
    apellido: string;
    edad: string;
    dni: string;
    obraSocial?: string;
    especialidad?:string;
    otraEspecialidad?:string;
    email?: string;
    password?: string;
    perfil?: string;
    fotoPerfilUno?:string;
    fotoPerfilDos?:string;
    aprobadoPorAdmin?:string;
    baja?:string;
    altura?:string;
    peso?:string;
    temperatura?:string;
    presion?:string;
    clave1?:string;
    valor1?:string;
    clave2?:string;
    valor2?:string;
    clave3?:string;
    valor3?:string;
    //resena?:string; //agregado    

    constructor(nombre: string,
                apellido: string,
                edad: string,
                dni: string,
                obraSocial?: string,
                especialidad?:string,
                otraEspecialidad?:string,
                email?: string,
                password?: string,
                perfil?: string,
                fotoPerfilUno?:string,
                fotoPerfilDos?:string,
                aprobadoPorAdmin?:string,
                baja?:string,
                altura?:string,
                peso?:string,
                temperatura?:string,
                presion?:string,
                clave1?:string,
                valor1?:string,
                clave2?:string,
                valor2?:string,
                clave3?:string,
                valor3?:string){

            this.nombre= nombre;
            this.apellido= apellido;
            this.edad= edad;
            this.dni= dni;
            this.obraSocial= obraSocial;
            this.especialidad=especialidad;
            this.otraEspecialidad=otraEspecialidad;
            this.email= email;
            this.password= password;
            this.perfil= perfil;
            this.fotoPerfilUno=fotoPerfilUno;
            this.fotoPerfilDos=fotoPerfilDos;
            this.aprobadoPorAdmin=aprobadoPorAdmin;
            this.baja=baja;
            this.altura=altura;
            this.peso=peso;
            this.temperatura=temperatura;
            this.presion=presion;
            this.clave1=clave1;
            this.valor1=valor1;
            this.clave2=clave2;
            this.valor2=valor2;
            this.clave3=clave3;
            this.valor3=valor3;
    }
}