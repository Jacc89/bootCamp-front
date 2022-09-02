import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pro',
  templateUrl: './agregar-pro.component.html',
  styleUrls: ['./agregar-pro.component.css']
})
export class AgregarProComponent implements OnInit {

  constructor(private service: ProductoService,
              private router: Router ) { }

  ngOnInit(): void {
  }
  producForm= new FormGroup({
    
    nombre:         new FormControl('', Validators.required),
    caracteristica: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.producForm.value);
    this.service.crearProd(this.producForm.value).subscribe((data:any)=>{
      alert("cliente creado");
      this.router.navigate(['/producto']);
    })

  }



}
