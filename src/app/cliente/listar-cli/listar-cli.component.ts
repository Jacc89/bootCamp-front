import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listar-cli',
  templateUrl: './listar-cli.component.html',
  styleUrls: ['./listar-cli.component.css']
})
export class ListarCliComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre', 'direccion', 'telefono'];

  constructor(private ClientService: ClienteService) { }

  ngOnInit(): void {
   this.ClientService.listClient();
   
    
  }

  get resultados(){
    return this.ClientService.resultados;
  }

}
