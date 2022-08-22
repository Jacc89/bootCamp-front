import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IProducto, IDataProducto } from '../interfaces/IDataProducto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  ApiUrl: string = environment.ApiUrl;
  productoURL: string = `${this.ApiUrl}/producto`;
  resultados: IProducto[]=[];

  constructor(private http: HttpClient) { }

  listProd(){
    this.http.get<IDataProducto>(this.productoURL)
    .subscribe(res =>{
      this.resultados = res.resultado;
    })
  }
}
