import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';

declare var google : any;
// declare var navigator : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  // map : any;
  originPlaceId = null;
  destinationPlaceId = null;
  // originInput = document.getElementById('origin-input');
  // destinationInput = document.getElementById('destination-input');

  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;


  cur_latitude = 0.0;
  cur_lonitute = 0.0;

  start='';
  end='';

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("startsearch") public startsearchElementRef: ElementRef;
  @ViewChild("endsearch") public endsearchElementRef: ElementRef;
  

  

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone:NgZone) {}

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(data=>{
        console.log("current location:", data);
        this.cur_latitude = data.coords.latitude;
        this.cur_lonitute = data.coords.longitude;
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

    //set google maps defaults
    // this.zoom = 4;
    // this.latitude = 39.8282;
    // this.longitude = -98.5795;

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

      startautocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = startautocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log("place", place);
          this.start = place.formatted_address
          console.log(this.start);
          //set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });


    this.mapsAPILoader.load()
    .then(() => {
      let endautocomplete = new google.maps.places.Autocomplete(this.endsearchElementRef.nativeElement, {
        types: ["address"]
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
          this.end = place.formatted_address
          console.log(this.end);
          //set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });

  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  // currentlocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(data=>{
  //       console.log("current location:", data);
  //       var map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 15,
  //         center: {lat: data.coords.latitude, lng: data.coords.longitude}
  //       });
  //       var marker = new google.maps.Marker({
  //         position: {lat: data.coords.latitude, lng: data.coords.longitude},
  //         map: map
  //       });

  //     });
  //   }
  // }

  route(){
    console.log(this.start, this.end);
    var directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: this.cur_latitude, lng: this.cur_lonitute},
    });
    directionsDisplay.setMap(map);
    directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, function(res, status){
      console.log("response", res);
      directionsDisplay.setDirections(res);
    })
  }



  

  

}
