import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeProComponent } from './home-pro/home-pro.component';
import { ListarProComponent } from './listar-pro/listar-pro.component';
import { AgregarProComponent } from './agregar-pro/agregar-pro.component';
import { EditarProComponent } from './editar-pro/editar-pro.component';
import { EliminarProComponent } from './eliminar-pro/eliminar-pro.component';

const routes:Routes =[
  { path: '', component: HomeProComponent,
    children: [
    { path: 'listado', component: ListarProComponent},
    { path: 'agregar', component: AgregarProComponent},
    { path: 'editar/:id', component: EditarProComponent},
    { path: 'eliminar/:id', component: EliminarProComponent},
    { path: '**', redirectTo:'listado' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductoRoutingModule { }
