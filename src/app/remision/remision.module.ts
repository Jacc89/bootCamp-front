import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarRemComponent } from './editar-rem/editar-rem.component';
import { EliminarRemComponent } from './eliminar-rem/eliminar-rem.component';
import { ListarRemComponent } from './listar-rem/listar-rem.component';
import { AgregarRemComponent } from './agregar-rem/agregar-rem.component';



@NgModule({
  declarations: [
    EditarRemComponent,
    EliminarRemComponent,
    ListarRemComponent,
    AgregarRemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RemisionModule { }
