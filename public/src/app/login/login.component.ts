import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reg_user={
    first_name   : '',
    last_name    : '',
    phone_number : '',
    email        : '',
    password     : '',
  }

  login_user={
    email        : '',
    password     : '',
  }

  isMember=true;

  constructor(private _httpServide:HttpService, private _cookieService:CookieService, private _router:Router) {
    if(this._cookieService.get("loginuserName")){
      this._router.navigate(['/dashboard']);
    } 
   }

  ngOnInit() {
  }

  notMember(){
    this.isMember = false;
  }

  getUser(form){
    if(!form.valid){
      return;
    }
    this._httpServide.getOneUser(this.login_user)
    .then(user=>{
      console.log("Login user: ", user);
      this._cookieService.put("loginuserName", user.first_name);
      this._router.navigate(['/dashboard']);
    })
    .catch(err=>{
      console.log("Login error: ", err);
    })
  }

  newUser(form){
    if(!form.valid){
      return;
    }
    this._httpServide.createUser(this.reg_user)
    .then(usercreated=>{
      console.log("created user: ", usercreated);
      this._cookieService.put("loginuserName", usercreated.first_name);
      this.reg_user={
        first_name   : '',
        last_name    : '',
        phone_number : '',
        email        : '',
        password     : '',
      }
      form.resetForm();
      this.isMember = true;
      this._router.navigate(['/dashboard']);
    })
    .catch(err=>{
      console.log("create user error: ", err);
      
    })
  }

}
