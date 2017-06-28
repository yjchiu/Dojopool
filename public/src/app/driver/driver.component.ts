import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  shotgun_requests = [];
  name = '';
  user_id=  {
    id : '',
  }

  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router) {
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.name = this._cookieService.get("loginuserName");
    this.user_id.id = this._cookieService.get("loginuserId");

    this._httpService.getallshotgun(this.user_id)
    .then(allshotguns=>{    
      this.shotgun_requests = allshotguns;
    })
    .catch(err=>{
      console.log("error in driver component constructor", err);
    })
   }

  ngOnInit() {
  }




  logout(){
    this._cookieService.remove('loginuserName');
    this._route.navigate(['/']);
  }

}
