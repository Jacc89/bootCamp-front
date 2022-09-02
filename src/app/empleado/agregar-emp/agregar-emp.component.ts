import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-agregar-emp',
  templateUrl: './agregar-emp.component.html',
  styleUrls: ['./agregar-emp.component.css']
})
export class AgregarEmpComponent implements OnInit {

  constructor(private service: EmpleadoService,
    private router: Router ) { }

ngOnInit(): void {
}
EmplForm= new FormGroup({

nombres:    new FormControl('', Validators.required),
apellidos:  new FormControl('', Validators.required),
direccion:  new FormControl('', Validators.required),
telefono:   new FormControl('', Validators.required),
correo:     new FormControl('', [Validators.required, Validators.email]),
sueldo:     new FormControl('', Validators.required),
cargo:      new FormControl('', Validators.required)
})

onSubmit(){
console.log(this.EmplForm.value);
this.service.crearEmpl(this.EmplForm.value).subscribe((data:any)=>{
alert("cliente creado");
this.router.navigate(['/empleado']);
})

}

}
