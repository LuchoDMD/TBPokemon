import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/classes/user";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  
  export class RegisterComponent implements OnInit {
    usuario: User = new User();
    
    constructor() { }
  
    ngOnInit(): void 
    {
      
    }
  
    ngOnSubmit() 
    {
  
    }
  }


