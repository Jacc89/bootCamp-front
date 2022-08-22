import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';


@Component({
  selector: 'app-listar-emp',
  templateUrl: './listar-emp.component.html',
  styleUrls: ['./listar-emp.component.css']
})
export class ListarEmpComponent implements OnInit {
  displayedColumns: string[] = ['id','nombres','apellidos','direccion','telefono','correo','sueldo','cargo'];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.listEmpl();
  }
   get resultados(){
    return this.empleadoService.resultados;
   }

}
