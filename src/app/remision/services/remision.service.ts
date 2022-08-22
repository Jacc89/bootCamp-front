import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RemisionService {

  ApiUrl: string = environment.ApiUrl;
  remisionURL: string = `${this.ApiUrl}/remision`;
  // resultados: IRemision[]=[];
  constructor(private http: HttpClient) { }
  
  listEmpl(){
    // this.http.get<IDataRemision>(this.remisionURL)
    // .subscribe(res =>{
      // this.resultados = res.resultado;
    // })
  }
}
