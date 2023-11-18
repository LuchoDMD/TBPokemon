import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/classes/user";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  
  export class RegisterComponent implements OnInit {
    usuario: User = new User();
    f_usuario!: FormGroup;
    constructor() { }
  
    ngOnInit(): void 
    {
      this.f_usuario=new FormGroup(
        {
          'lName': new FormControl(this.usuario.lName,[Validators.required,Validators.maxLength(50)]),
          'fName': new FormControl(this.usuario.fName,[Validators.required,Validators.maxLength(50)]),
          'nName': new FormControl(this.usuario.nName,[Validators.required,Validators.maxLength(50)]),
          'email': new FormControl(this.usuario.email,[Validators.required,Validators.email]),
          'passw': new FormControl(this.usuario.passw,[Validators.required,Validators.maxLength(50)])
        });
    }
  
    ngOnSubmit() 
    {
  
    }
  }


