import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './compartidos/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'cliente',
    loadChildren: () => import ('./cliente/cliente.module').then(m => m.ClienteModule)},
  { path: 'empleado',
    loadChildren: ()=> import ('./empleado/empleado.module').then(m => m.EmpleadoModule)},
  { path: 'producto',
    loadChildren: ()=> import ('./producto/producto.module').then(m => m.ProductoModule)},
  { path: 'remision',
    loadChildren: ()=> import ('./remision/remision.module').then(m => m.RemisionModule)},
  { path: '**', redirectTo:''}
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
