export interface Perfil {
  perfil: string;
  apellido: string;
  nombre: string;
  dni:string;
  email: string;
  aprobadoPorAdmin?:string,
  especialidad?:string;
  otraEspecialidad?:string;
  fotoPerfilUno?:string;
  fotoPerfilDos?:string;
  
  //fotoPerfilUnoPaciente:string;
  //nombrePaciente:string;
}