import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/IDataProducto';
import { ProductoService } from '../services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarProComponent } from '../editar-pro/editar-pro.component';

@Component({
  selector: 'app-listar-pro',
  templateUrl: './listar-pro.component.html',
  styleUrls: ['./listar-pro.component.css']
})
export class ListarProComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','caracteristica', 'acciones'];
  
  constructor(private productoServices: ProductoService,
              private dialog: MatDialog) { }

  ngOnInit(): void { 
       this.productoServices.listProd();

  }
   get resultados(){
    return this.productoServices.resultados;
   }

   ActualizarProducto(producto: IProducto){
    console.log(producto);
    this.dialog.open(EditarProComponent, {data:{
      id:   producto.id,
      nombre:   producto.nombre,
      caracteristica: producto.caracteristica

    }})
   }

}
