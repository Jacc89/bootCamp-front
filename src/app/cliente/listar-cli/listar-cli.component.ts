import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/IDataCliente';
import { ClienteService } from '../services/cliente.service';
import { MatDialog} from '@angular/material/dialog';
import { EditarCliComponent } from '../editar-cli/editar-cli.component';

@Component({
  selector: 'app-listar-cli',
  templateUrl: './listar-cli.component.html',
  styleUrls: ['./listar-cli.component.css']
})
export class ListarCliComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre', 'direccion', 'telefono', 'acciones'];

  constructor(private ClientService: ClienteService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
   this.ClientService.listClient();
   
    
  }

  get resultados(){
    return this.ClientService.resultados;
  }

  actualizarCliente(cliente: ICliente){
    console.log(cliente);
    this.dialog.open(EditarCliComponent), {
      data: {
        id: cliente.id,
        nombre: cliente.nombre,
        direccion:  cliente.direccion,
        telefono:   cliente.telefono,
      }
    }
  }

}
