import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarProComponent } from './eliminar-pro/eliminar-pro.component';
import { EditarProComponent } from './editar-pro/editar-pro.component';
import { AgregarProComponent } from './agregar-pro/agregar-pro.component';
import { ListarProComponent } from './listar-pro/listar-pro.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { HomeProComponent } from './home-pro/home-pro.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EliminarProComponent,
    EditarProComponent,
    AgregarProComponent,
    ListarProComponent,
    HomeProComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    EditarProComponent
  ]
})
export class ProductoModule { }
