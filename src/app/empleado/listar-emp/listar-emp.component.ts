import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarEmpComponent } from '../editar-emp/editar-emp.component';
import { IEmpleado } from '../interfaces/IDataEmpleado';
import { EmpleadoService } from '../services/empleado.service';


@Component({
  selector: 'app-listar-emp',
  templateUrl: './listar-emp.component.html',
  styleUrls: ['./listar-emp.component.css']
})
export class ListarEmpComponent implements OnInit {
  displayedColumns: string[] = ['id','nombres','apellidos','direccion','telefono','correo','sueldo','cargo', 'acciones'];

  constructor(private empleadoService: EmpleadoService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.empleadoService.listEmpl();
  }
   get resultados(){
    return this.empleadoService.resultados;
   }

   ActualizarEmpleado(empleado: IEmpleado){
    console.log(empleado);
    this.dialog.open(EditarEmpComponent , {data:{
      id:        empleado.id,
      nombres:   empleado.nombres,
      apellidos: empleado.apellidos,
      direccion: empleado.direccion,
      telefono:  empleado.telefono,
      correo:    empleado.correo,
      sueldo:    empleado.sueldo,
      cargo:     empleado.cargo 

    }})
   }

}
