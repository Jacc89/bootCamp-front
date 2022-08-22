import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCliComponent } from './listar-cli/listar-cli.component';
import { AgregarCliComponent } from './agregar-cli/agregar-cli.component';
import { EditarCliComponent } from './editar-cli/editar-cli.component';
import { EliminarCliComponent } from './eliminar-cli/eliminar-cli.component';
import { HomeCliComponent } from './home-cli/home-cli.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from '../material/material.module';
import { ClienteService } from './services/cliente.service';



@NgModule({
  declarations: [
    ListarCliComponent,
    AgregarCliComponent,
    EditarCliComponent,
    EliminarCliComponent,
    HomeCliComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
