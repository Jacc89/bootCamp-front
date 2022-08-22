import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRemComponent } from './home-rem/home-rem.component';
import { ListarRemComponent } from './listar-rem/listar-rem.component';
import { AgregarRemComponent } from './agregar-rem/agregar-rem.component';
import { EditarRemComponent } from './editar-rem/editar-rem.component';
import { EliminarRemComponent } from './eliminar-rem/eliminar-rem.component';

const routes: Routes=[
  { path: '', component: HomeRemComponent, 
  children: [
    { path: 'listado', component: ListarRemComponent },
    { path: 'agregar', component: AgregarRemComponent },
    { path: 'editar/:id', component: EditarRemComponent },
    { path: 'eliminar/:id', component: EliminarRemComponent },
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
export class RemisionRoutingModule { }
