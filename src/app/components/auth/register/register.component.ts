import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit
{
    usuario:User=new User();
    f_usuario:FormGroup;

    constructor()
    {
      this.f_usuario= new FormGroup({
        'lName': new FormControl(this.usuario.lName,
        [Validators.required, Validators.maxLength(30)]),
        'fName' : new FormControl(this.usuario.fName,
        [Validators.required, Validators.maxLength(30)]),
        'nName': new FormControl(this.usuario.nName,
        [Validators.required, Validators.maxLength(50)]), 
        'email': new FormControl(this.usuario.email,
        [Validators.required, Validators.email]),
        'passw': new FormControl(this.usuario.passw,
        [Validators.required/*, this.passWRDValidator*/]) 
        /* Crear un Validador para que la clave si o si incluya una mayuscula, 1 caracter especial y 3 numeros */
      });
    }

    ngOnInit(): void 
    {
      RegisterComponent.constructor();
    }

    ngOnSubmit()
    {
      
    }

    get lName(){ return this.f_usuario.get('lName');}
    get fName(){ return this.f_usuario.get('fName');}
    get nName(){ return this.f_usuario.get('nName');}
    get email(){ return this.f_usuario.get('email');}
    get passw(){ return this.f_usuario.get('passw');}
    
  }
