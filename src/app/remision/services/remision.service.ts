import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IDataRemision, IRemision } from '../interfaces/IDataRemision';

@Injectable({
  providedIn: 'root'
})
export class RemisionService {

  ApiUrl: string = environment.ApiUrl;
  empleadoURL: string = `${this.ApiUrl}/remision`;
  resultados: IRemision[]=[];

  constructor(private http: HttpClient) { }
  listRem(){
    this.http.get<IDataRemision>(this.empleadoURL)
    .subscribe(res =>{
      this.resultados = res.resultado;
    })
  }

  crearRem(empleado: IRemision){
    return this.http.post(this.empleadoURL, empleado)

 }
 actualizarRem(id: number, empleado:IRemision){
  return this.http.put(this.empleadoURL + id, empleado);

}
}
