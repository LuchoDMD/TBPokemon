import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit
{
    usuario:User=new User();
    n_usuario:FormGroup | any;
    constructor(){}
    createForm()
    {
        this.n_usuario= new FormGroup('');
    }

    ngOnInit(): void 
    {
      
    }

    ngOnSubmit()
    {

    }

}
