import { Component, OnInit  } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "../config.service";

import { users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm =  this.formBuilder.group({
      email : "",
      password: ""
    });
  users:any;
  isFind:any;
  errorMessage:any;
  constructor(
    private formBuilder: FormBuilder,
    private config: ConfigService,
    private router: Router
  ) { }


  ngOnInit(): void { }

   onSubmit(loginData:any) {
     this.config.login(loginData).subscribe(responce => {
      console.log(responce);
      // const keys = responce.headers.keys();

      if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(responce));
        this.router.navigate(['/dashboard']);
      }
    }, error => {
      this.errorMessage = error.error.error;
      console.log(error.error);
    })
    
     
    
      
    
    // this.loginForm.reset();
    
  }

 

}
