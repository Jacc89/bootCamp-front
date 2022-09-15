import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// moddulos
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
// import {MatTestDialogOpenerModule} from '@angular/material/dialog/testing';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule,
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatMenuModule,
  //   MatButtonModule,
  //   MatProgressSpinnerModule,
  //   MatCardModule,
  //   MatTableModule,
  //   MatPaginatorModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatSelectModule,
  //   MatDialogModule,
  //   MatListModule
    
    
  // ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule
    
    
  ]
})
export class MaterialModule { }
