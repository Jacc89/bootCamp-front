import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './compartidos/home/home.component';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { RemisionModule } from './remision/remision.module';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, pathMatch:'full' },
  { path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},
  { path: '**', redirectTo:'inicio'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule  
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
