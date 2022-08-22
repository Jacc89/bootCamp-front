import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { ListarEmpComponent } from './listar-emp/listar-emp.component';
import { AgregarEmpComponent } from './agregar-emp/agregar-emp.component';
import { EditarEmpComponent } from './editar-emp/editar-emp.component';
import { EliminarEmpComponent } from './eliminar-emp/eliminar-emp.component';



const routes: Routes=[
  { path: '', component: HomeEmpComponent, 
  children: [
   { path: 'listado', component: ListarEmpComponent},
   { path: 'agregar', component: AgregarEmpComponent},
   { path: 'editar/:id', component: EditarEmpComponent},
   { path: 'eliminar/:id', component: EliminarEmpComponent},
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
  exports:
  [
    RouterModule
  ]
})
export class EmpleadoRoutingModule { }
