import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';

declare var google : any;
declare var navigator : any;


@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  shotgun_info = {};
  driver_id=  {
    id : '',
  }


  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router, private mapsAPILoader: MapsAPILoader, private ngZone:NgZone) {
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.driver_id.id = this._cookieService.get('loginuserId');
   }

  ngOnInit() {
    this.mapsAPILoader.load()
    .then(() => {
      this._httpService.getdriver(this.driver_id)
      .then(driver_res=>{
        console.log("pick up info: ", driver_res);
        this.shotgun_info = driver_res;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        var map = new google.maps.Map(document.getElementById('map'));
        directionsDisplay.setMap(map);
        directionsService.route({
          origin : driver_res.driver_start,
          destination: driver_res.driver_end,
          waypoints : [{
            location : driver_res.shotgun_start,
            stopover: true,
          },
          {
            location : driver_res.shotgun_end,
            stopover: true,
          }],
          travelMode : 'DRIVING'
        }, function(res,status){
          console.log("direction: ", res);
            directionsDisplay.setDirections(res);
            directionsDisplay.setPanel(document.getElementById('right-panel'));
        })


      })

    });

  }

  dropped_off(){
    this._httpService.removedriver(this.driver_id)
    .then(()=>{
      console.log("remove successfully!!");
      this._route.navigate(['/driver']);
    })
    .catch()
  }

}
