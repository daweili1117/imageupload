import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { RestheaderService } from '../restheader.service';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private restheaderService: RestheaderService, private peopleService: PeopleService) {
    // this.router.navigate(['/home']);//remove this just for local dev
   }
  loginError= false;
  hide=true;
  ngOnInit() {
  }

  loginFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  

  Login(){
    console.log(this.loginFormGroup)
    this.loginService.login(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe(
    
  (data) =>{
       console.log('data from the service ', data)
        if(data && data.token) {
          this.restheaderService.setHttpHeaders(data.token);
          let jwtUser: jwtUser = JSON.parse(atob(data.token.split('.')[1]));
          let email = jwtUser.email;
          let user_id = jwtUser.user_id;
          console.log('------------------> ', jwtUser.username);
          console.log('------------------> ', data.token);
          this.router.navigate(['/dashboard']);
        }
         
         
      }, error => {
            this.loginError = true
            console.log('error', this.loginError)
      }
    )
    }
}

export class jwtUser {
  user_id:any;
  username:string;
  exp:string;
  email:string;
  orig_iat:any;
  }