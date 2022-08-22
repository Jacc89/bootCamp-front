import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarProComponent } from './eliminar-pro/eliminar-pro.component';
import { EditarProComponent } from './editar-pro/editar-pro.component';
import { AgregarProComponent } from './agregar-pro/agregar-pro.component';
import { ListarProComponent } from './listar-pro/listar-pro.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { HomeProComponent } from './home-pro/home-pro.component';



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
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
