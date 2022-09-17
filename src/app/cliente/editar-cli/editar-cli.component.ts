import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-editar-cli',
  templateUrl: './editar-cli.component.html',
  styleUrls: ['./editar-cli.component.css']
})
export class EditarCliComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditarCliComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { nombre:string, direccion:string, telefono:string, id: number},
              private service: ClienteService,
              private router: Router) {
                  this.id = data.id;
                  this.form = fb.group({
                    id: [data.id, Validators.required],
                    nombre: [data.nombre, Validators.required],
                    direccion: [data.direccion, Validators.required],
                    telefono: [data.telefono, Validators.required]
                  })
                 }
                 Cerrar(){
                  this.dialogRef.close();

                }
                Guardar(){
                  this.form.value.id =this.id;
                  this.service.editarCliente(this.id, this.form.value).subscribe((data)=>{
                    this.router.navigate(['agregar']);
                    window.location.reload();

                  });
                  this.dialogRef.close();                  
                }

  ngOnInit(): void {
  }
  

}
