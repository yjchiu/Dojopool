import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logoutflag;

  constructor(private _communicateService: HttpService, private _cookieService:CookieService, private _route:Router){
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this._communicateService.observedLogoutflag.subscribe(
      (status)=>this.logoutflag=status,
      (err)=>{console.log(err);}
    );
  }
  
  ngOnInit() {    
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
    this._communicateService.updateLogoutflag(false);
  }
  ngOnDestroy(){
    this._communicateService.observedLogoutflag.unsubscribe();
  }
}
