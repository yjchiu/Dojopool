import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _cookieService:CookieService, private _route:Router){
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
  }
  // users: Array<any> = [];
  // constructor(private _http: HttpService) {
  //   this.getUsers();
  //   console.log("content:/// refreshed!!come here again ", this.users);
  //  }
  // getUsers(){
  //   console.log("null users in parent: ", this.users);
  //   this._http.retrieveAll()
  //   .then(data=>{
  //     this.users = data.reverse();
  //   console.log("content: ", this.users);
  //   })
  //   .catch(err=>{console.log(err);})
  // }
  logout(){
    this._cookieService.remove('loginuserName');
    this._route.navigate(['/']);
  }
}
