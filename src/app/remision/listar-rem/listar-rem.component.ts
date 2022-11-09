import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarRemComponent } from '../editar-rem/editar-rem.component';
import { IDataRemision, IRemision } from '../interfaces/IDataRemision';
import { RemisionService } from '../services/remision.service';

@Component({
  selector: 'app-listar-rem',
  templateUrl: './listar-rem.component.html',
  styleUrls: ['./listar-rem.component.css']
})
export class ListarRemComponent implements OnInit {

  displayedColumns: string[] = ['id','numRemision','fecha','encargadoNom','clienteNom','cantidad','presentacion','productoNom','observaciones', 'acciones'];

  constructor(private remisionService: RemisionService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.remisionService.listRem();
  }
   get resultados(){
    return this.remisionService.resultados;
   }

   ActualizarRemision(remision: IRemision){
    console.log(remision);
    this.dialog.open(EditarRemComponent , {data:{
      id:        remision.id,
      numRemision:   remision.numRemision,
      fecha: remision.fecha,
      encargadoNom: remision.encargadoNom,
      clienteNom:  remision.clienteNom,
      cantidad:    remision.cantidad,
      presentacion:    remision.presentacion,
      productoNom:     remision.productoNom,
      observaciones:     remision.observaciones  

    }})
   }

   

}
