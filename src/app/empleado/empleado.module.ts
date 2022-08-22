import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpComponent } from './listar-emp/listar-emp.component';
import { AgregarEmpComponent } from './agregar-emp/agregar-emp.component';
import { EliminarEmpComponent } from './eliminar-emp/eliminar-emp.component';
import { EditarEmpComponent } from './editar-emp/editar-emp.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListarEmpComponent,
    AgregarEmpComponent,
    EliminarEmpComponent,
    EditarEmpComponent,
    HomeEmpComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule
  ]
})
export class EmpleadoModule { }
