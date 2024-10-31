export class Perfil {
    id: string;
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

    constructor(
        id: string,
        nombre: string,
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
        baja?:string){
            id: id;
            nombre: nombre;
            apellido: apellido;
            edad: edad;
            dni: dni;
            obraSocial: obraSocial;
            especialida:especialidad;
            otraEspecialidad:otraEspecialidad;
            email: email;
            password: password;
            perfil: perfil;
            fotoPerfilUno:fotoPerfilUno;
            fotoPerfilDos:fotoPerfilDos;
            aprobadoPorAdmin:aprobadoPorAdmin;
            baja:baja;
    }
}