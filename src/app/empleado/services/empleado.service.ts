import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmpleado, IdataEmpleado } from '../interfaces/IDataEmpleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  ApiUrl: string = environment.ApiUrl;
  empleadoURL: string = `${this.ApiUrl}/empleado`;
  resultados: IEmpleado[]=[];

  constructor(private http: HttpClient) { }
  listEmpl(){
    this.http.get<IdataEmpleado>(this.empleadoURL)
    .subscribe(res =>{
      this.resultados = res.resultado;
    })
  }
}
