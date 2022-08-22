import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listar-pro',
  templateUrl: './listar-pro.component.html',
  styleUrls: ['./listar-pro.component.css']
})
export class ListarProComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','caracteristica'];
  
  constructor(private productoServices: ProductoService) { }

  ngOnInit(): void { 
       this.productoServices.listProd();

  }
   get resultados(){
    return this.productoServices.resultados;
   }

}
