import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})

export class ExcelExportService {

  constructor() { }

  async exportar_ArrayObjetos_toExcel(arrayObjetos:any ,nombreDeArchivoRecibido:string, nombreDeHojaRecibido:string){
      //let arrayUsuarios = await this.srvFirebase.leerPacientesDB();
      //arrayUsuarios.concat(await this.srvFirebase.leerEspecialistasDB());
      //arrayUsuarios.concat(await this.srvFirebase.leerAdministradoresDB());
  
      const worksheet = XLSX.utils.json_to_sheet(arrayObjetos);
      console.log(worksheet);
  
      const wb:XLSX.WorkBook  = XLSX.utils.book_new();
  
      XLSX.utils.book_append_sheet(wb, worksheet, nombreDeHojaRecibido);
  
      XLSX.writeFile(wb,nombreDeArchivoRecibido + ".xlsx");
  }  

    /*
    async exportar_ArrayObjetos_toExcel(arrayObjetos: any[], nombreDeArchivoRecibido: string, nombreDeHojaRecibido: string) {
    try {
      // Assuming these services retrieve data asynchronously
      const pacientes = await this.srvFirebase.leerPacientesDB();
      const especialistas = await this.srvFirebase.leerEspecialistasDB();
      const administradores = await this.srvFirebase.leerAdministradoresDB();
  
      // Combine retrieved data into a single array
      const combinedData = pacientes.concat(especialistas, administradores);
  
      const worksheet = XLSX.utils.json_to_sheet(combinedData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, worksheet, nombreDeHojaRecibido);
      XLSX.writeFile(wb, nombreDeArchivoRecibido + ".xlsx");
    } catch (error) {
      console.error('Error exporting data to Excel:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
    }*/
  
}