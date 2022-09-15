import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pro',
  templateUrl: './editar-pro.component.html',
  styleUrls: ['./editar-pro.component.css']
})
export class EditarProComponent implements OnInit {

  formPro: FormGroup;
  id: number;
  constructor( private buider:FormBuilder,
            private service: ProductoService,
            private router: Router,
            private dialogRef: MatDialogRef<EditarProComponent>,
            @Inject(MAT_DIALOG_DATA) private data:{id:number, nombre:string, caracteristica:string},
                 ) 
                {
                  this.id = data.id;
                  this.formPro = buider.group({
                    id: [data.id, Validators.required],
                    nombre:[data.nombre, Validators.required],
                    caracteristica: [data.caracteristica, Validators.required]
                  })

                 }

  ngOnInit(): void {
  }

  Cerrar(){
    this.dialogRef.close();

  }
  Guardar(){
    this.formPro.value.id = this.id;
    this.service.actualizarPro(this.id,this.formPro.value)
    .subscribe((data): any=>{
      this.router.navigate(['/producto']);
      window.location.reload();
    })
    this.dialogRef.close();

  }

}
