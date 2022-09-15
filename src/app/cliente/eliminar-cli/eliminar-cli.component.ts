import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { IDataCliente } from '../interfaces/IDataCliente';

@Component({
  selector: 'app-eliminar-cli',
  templateUrl: './eliminar-cli.component.html',
  styleUrls: ['./eliminar-cli.component.css']
})
export class EliminarCliComponent implements OnInit {
  id:any;
  cliente={
    nombre:''
  }

  constructor(private service: ClienteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.service.getCliente(this.id).subscribe((data:any)=>{
      console.log(data);
      this.cliente.nombre= data.result.nombre;

    })
  }

  cancelar(){
    this.router.navigate(['listado']);

  }
  confirmar(){
    this.service.eliminar(this.id).subscribe((data:any)=>{
      console.log(data.id);
      this.router.navigate(['listado']);
    })

  }
 
}
