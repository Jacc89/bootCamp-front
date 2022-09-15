import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeCliComponent } from './home-cli/home-cli.component';
import { ListarCliComponent } from './listar-cli/listar-cli.component';
import { AgregarCliComponent } from './agregar-cli/agregar-cli.component';
import { EditarCliComponent } from './editar-cli/editar-cli.component';
import { EliminarCliComponent } from './eliminar-cli/eliminar-cli.component';

const routes: Routes = [
  { path: '', component: HomeCliComponent, 
  children: [
    { path: 'listado', component: ListarCliComponent},
    { path: 'agregar', component: AgregarCliComponent},
    { path: 'editar/:id', component: EditarCliComponent},
    { path: 'eliminar-cli/:id', component: EliminarCliComponent},
    { path: '**', redirectTo:'listado' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ClienteRoutingModule { }
