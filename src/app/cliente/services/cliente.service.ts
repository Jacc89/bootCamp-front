import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { ICliente, IDataCliente } from '../interfaces/IDataCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  ApiUrl: string= environment.ApiUrl;
  clienteUrl: string= `${this.ApiUrl}/cliente`;
  resultados: ICliente[]= [];

  constructor(private http: HttpClient) { }

  listClient(){
    this.http.get<IDataCliente>(this.clienteUrl)
    .subscribe(res =>{
      this.resultados = res.resultado;
    })
  }
  getCliente(id:number){
    return this.http.get(this.clienteUrl+id);
  }

  crearClient(cliente:ICliente){
    return this.http.post(this.clienteUrl, cliente)

 }
 editarCliente(id: number, cliente: ICliente){
  return this.http.put(this.clienteUrl+id, cliente);

 }

 eliminar(id:number){
  return this.http.delete(this.clienteUrl+id)
 }
}
