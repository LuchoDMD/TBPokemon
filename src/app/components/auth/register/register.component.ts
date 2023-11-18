import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/classes/user";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  
  export class RegisterComponent implements OnInit 
  {
    usuario: User= new User();
    fUsuario!: FormGroup;
    constructor() { }
  
    ngOnInit(): void 
    {
      this.fUsuario= new FormGroup
      ({
         'lName': new FormControl(this.usuario.get_lName(),[Validators.required,Validators.maxLength(50)]),
         'fName': new FormControl(this.usuario.get_fName(),[Validators.required,Validators.maxLength(50)]),
         'nName': new FormControl(this.usuario.get_nName(),[Validators.required,Validators.maxLength(50)]),
         'email': new FormControl(this.usuario.get_email(),[Validators.required,Validators.email]),
         'passw': new FormControl(this.usuario.get_passw(),[Validators.required])
      });
    }
    
  
    ngOnSubmit() 
    {
      if (this.fUsuario.valid) 
      {
        let lname:string=this.fUsuario.get('lName')?.value;
        let fname:string=this.fUsuario.get('fName')?.value;
        let nname:string=this.fUsuario.get('nName')?.value;
        let email:string=this.fUsuario.get('email')?.value;
        let passw:string=this.fUsuario.get('passw')?.value;
        this.usuario.set_lName(lname);
        this.usuario.set_fName(fname);
        this.usuario.set_nName(nname);
        this.usuario.set_email(email);
        this.usuario.set_passw(passw); 
        if(this.usuario!=(null||undefined))
        {
          /* ACA SE ALMACENA EN EL JSON.SERVER */
        }
      }
    }
  }


