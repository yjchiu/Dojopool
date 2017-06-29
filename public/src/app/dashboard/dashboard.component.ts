import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


declare var google : any;
declare var navigator : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  name='';

  cur_latitude = 0.0;
  cur_lonitute = 0.0;

  start='';
  end='';
  duration = '';

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("startsearch") public startsearchElementRef: ElementRef;
  @ViewChild("endsearch") public endsearchElementRef: ElementRef;
  

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone:NgZone, private _cookieService:CookieService, private _route:Router) {
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.name = this._cookieService.get("loginuserName");
    
  }

  ngOnInit(){}

  

  logout(){
    this._cookieService.remove('loginuserName');
    this._route.navigate(['/']);
  }



  

  

}
