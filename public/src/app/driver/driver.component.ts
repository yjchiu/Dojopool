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


  showroute_flag = false;


  cur_latitude = 0.0;
  cur_lonitute = 0.0;

  driver_start='';
  driver_end='';
  duration = '';
  start_latlng : any;

  driver_time  = 0;
  carpool_time = 0;
  percentage = 0.0;

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
      console.log("SHOTGUN REQUEST: ", this.shotgun_requests);
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


  // private listAllDestination(){
  //   var map = new google.maps.Map(document.getElementById("map"));
  // }



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
          zoom: 11,
          center: {lat: data.coords.latitude, lng: data.coords.longitude}
        });
        var marker = new google.maps.Marker({
          position: {lat: data.coords.latitude, lng: data.coords.longitude},
          map: map
        });
        
        for(var i = 0 ; i < self.shotgun_requests.length ; i++){
          geocoder.geocode({'address': self.shotgun_requests[i].end }, function(res,status){
            if(status == google.maps.GeocoderStatus.OK){
              console.log("ALALALALAL: ", res);
              var marker = new google.maps.Marker({
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                map: map,
                position : res[0].geometry.location,
                title  : res[0].formatted_address,
              })
            }
          })
        }





      });
    }
  }



  route(){
    var self = this;
    console.log("AAA", self.driver_start, self.driver_end);
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
      self.driver_time = Math.floor(res.routes[0].legs[0].duration.value/60);
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
      // console.log(this.driver_start);
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
        destination: this.driver_end,
        waypoints: [
        {
          location : shotgun_req.start,
          stopover: true 
        },
        {
          location : shotgun_req.end,
          stopover: true 
        },
        ],
        travelMode: 'DRIVING'
      }, function(res, status){
        console.log("response legs", res);
        var time = 0;
        for(var i = 0; i < res.routes[0].legs.length;i++){
          time += res.routes[0].legs[i].duration.value;
          // console.log("time: ", res.routes[0].legs[i].duration.value);
        }

        self.carpool_time =  Math.floor(time/60);
        directionsDisplay.setDirections(res);
        self.showroute_flag = true;
        self.percentage = Math.floor((self.carpool_time-self.driver_time)*100/self.driver_time);

      })
    })
    .catch()
  }



  pickup(request_id){
    var self = this;
    var request={
      id : request_id,
    }
    this._httpService.getoneshotgun(request)
    .then(shotgun_req=>{
      console.log("PICK UP REQUEST: ", shotgun_req)
      var driver = {
        driver_start  : self.driver_start,
        driver_end    : self.driver_end,
        shotgun_start : shotgun_req.start,
        shotgun_end   : shotgun_req.end,
        shotgun_name  : shotgun_req._user.first_name,
        shotgun_phone : shotgun_req._user.phone_number,
        _user         : this._cookieService.get("loginuserId")
      };
      this._httpService.createDriver(driver)
      .then(driver_created=>{
        console.log("driver created: ", driver_created);
      })
      .catch(err=>{});

      this._httpService.removeshotgun(shotgun_req)
      .then(()=>{
        this._route.navigate(['/pickup']);
      })
    })
    .catch(err=>{});
  }


  logout(){
    this._cookieService.remove('loginuserName');
    this._route.navigate(['/']);
  }

}
