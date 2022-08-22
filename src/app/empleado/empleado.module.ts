import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpComponent } from './listar-emp/listar-emp.component';
import { AgregarEmpComponent } from './agregar-emp/agregar-emp.component';
import { EliminarEmpComponent } from './eliminar-emp/eliminar-emp.component';
import { EditarEmpComponent } from './editar-emp/editar-emp.component';



@NgModule({
  declarations: [
    ListarEmpComponent,
    AgregarEmpComponent,
    EliminarEmpComponent,
    EditarEmpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpleadoModule { }
