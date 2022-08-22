import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarRemComponent } from './editar-rem/editar-rem.component';
import { EliminarRemComponent } from './eliminar-rem/eliminar-rem.component';
import { ListarRemComponent } from './listar-rem/listar-rem.component';
import { AgregarRemComponent } from './agregar-rem/agregar-rem.component';
import { HomeRemComponent } from './home-rem/home-rem.component';
import { RemisionRoutingModule } from './remision-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    EditarRemComponent,
    EliminarRemComponent,
    ListarRemComponent,
    AgregarRemComponent,
    HomeRemComponent
  ],
  imports: [
    CommonModule,
    RemisionRoutingModule,
    MaterialModule
  ]
})
export class RemisionModule { }
