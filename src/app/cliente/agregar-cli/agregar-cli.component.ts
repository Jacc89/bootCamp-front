import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-agregar-cli',
  templateUrl: './agregar-cli.component.html',
  styleUrls: ['./agregar-cli.component.css']
})
export class AgregarCliComponent implements OnInit {

  constructor(private service: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }
  clientForm= new FormGroup({
    
    nombre:    new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono:  new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.clientForm.value);
    this.service.crearClient(this.clientForm.value).subscribe((data:any)=>{
      alert("cliente creado");
      this.router.navigate(['/cliente']);
    })

  }

}
