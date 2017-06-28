import { Component, OnInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';


declare var google : any;
declare var navigator : any;

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


  cur_latitude = 0.0;
  cur_lonitute = 0.0;

  driver_start='';
  driver_end='';
  duration = '';
  start_latlng : any;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("startsearch") public startsearchElementRef: ElementRef;
  @ViewChild("endsearch") public endsearchElementRef: ElementRef;

  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router, private mapsAPILoader: MapsAPILoader, private ngZone:NgZone) {
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
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load()
    .then(() => {
      let startautocomplete = new google.maps.places.Autocomplete(this.startsearchElementRef.nativeElement, {
        types: ["address"]
      });
      let endautocomplete = new google.maps.places.Autocomplete(this.endsearchElementRef.nativeElement, {
        types: ["address"]
      });

      startautocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = startautocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log("place", place);
          if(place){
            this.driver_start = place.formatted_address;
          }
        });
      });

      endautocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = endautocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log("place", place);
          this.driver_end = place.formatted_address
        });
      });
    });


  }



  private setCurrentPosition() {
    var self = this;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(data=>{
        console.log("current location:", data);
        this.cur_latitude = data.coords.latitude;
        this.cur_lonitute = data.coords.longitude;
        this.start_latlng = new google.maps.LatLng(this.cur_latitude, this.cur_lonitute);

        var geocoder  = new google.maps.Geocoder();             // create a geocoder object    // turn coordinates into an object          
        geocoder.geocode({'latLng': this.start_latlng }, function (results, status) {
          if(status == google.maps.GeocoderStatus.OK) {           // if geocode success
            self.driver_start = results[0].formatted_address;
            // console.log("IN geocoder: ", self.start, self);       // if address found, pass to processing function
          }
        })

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: data.coords.latitude, lng: data.coords.longitude}
        });
        var marker = new google.maps.Marker({
          position: {lat: data.coords.latitude, lng: data.coords.longitude},
          map: map
        });
      });
    }
  }



  route(){
    var self = this;
    console.log("AAA", self.driver_start, self.driver_end);
    var shotgun = {
      start : self.driver_start,
      end : self.driver_end,
      _user : this._cookieService.get('loginuserId'),
    }
    // this._httpService.createShotGun(shotgun);
    console.log(self);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: this.cur_latitude, lng: this.cur_lonitute},
    });
    directionsDisplay.setMap(map);
    directionsService.route({
      origin: this.driver_start,
      destination: this.driver_end,
      travelMode: 'DRIVING'
    }, function(res, status){
      console.log("response", res);
      self.duration = res.routes[0].legs[0].duration.text;
      console.log("dur", self.duration); 
      directionsDisplay.setDirections(res);
    })
  }


  showroute(request_id){
    var self = this;
    console.log("show route: ",request_id);
    var request={
      id : request_id,
    }
    this._httpService.getoneshotgun(request)
    .then(shotgun_req=>{
      console.log("find shotgun request: ", shotgun_req);
      console.log(this.driver_start);
      // console.log(this.driver_end);


      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: this.cur_latitude, lng: this.cur_lonitute},
      });
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: this.driver_start,
        destination: shotgun_req.end,
        waypoints: [{
          location : shotgun_req.start,
          stopover: true 
        }],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(res, status){
        console.log("response", res);
        self.duration = res.routes[0].legs[0].duration.text;
        console.log("dur", self.duration); 
        directionsDisplay.setDirections(res);



      })
    })
    .catch()
  }




  logout(){
    this._cookieService.remove('loginuserName');
    this._route.navigate(['/']);
  }

}
