import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-editar-emp',
  templateUrl: './editar-emp.component.html',
  styleUrls: ['./editar-emp.component.css']
})
export class EditarEmpComponent implements OnInit {

  formEmpl: FormGroup;
  id: number;
  constructor( private buider:FormBuilder,
            private service: EmpleadoService,
            private router: Router,
            private dialogRef: MatDialogRef<EditarEmpComponent>,
            @Inject(MAT_DIALOG_DATA) private data:{
              id:        number,
              nombres:   string,
              apellidos: string,
              direccion: string,
              telefono:  string,
              correo:    string,
              sueldo:    string,
              cargo:     string},
                 ) 
                {
                  this.id = data.id;
                  this.formEmpl = buider.group({
                    id: [data.id, Validators.required],
                    nombres:[data.nombres, Validators.required],
                    apellidos: [data.apellidos, Validators.required],
                    direccion: [data.direccion, Validators.required],
                    telefono: [data.telefono, Validators.required],
                    correo: [data.correo, Validators.required],
                    sueldo: [data.sueldo, Validators.required],
                    cargo: [data.cargo, Validators.required]
                  })

                 }

  ngOnInit(): void {
  }

  Cerrar(){
    this.dialogRef.close();

  }
  Guardar(){
    this.formEmpl.value.id = this.id;
    this.service.actualizarEmpl(this.id,this.formEmpl.value)
    .subscribe((data): any=>{
      this.router.navigate(['/empleado']);
      window.location.reload();
    })
    this.dialogRef.close();

}
}
