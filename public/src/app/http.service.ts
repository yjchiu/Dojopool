import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/users')
    .map( data => data.json() )
    .toPromise();
  }
  createUser(user){
    console.log("user:",user);
    return this._http.post("/newuser", user)
    .map(data => data.json())
    .toPromise();
  }

  getOneUser(user){
    console.log("getOne", user);
    return this._http.post('/getuser', user)
    .map(data=>data.json())
    .toPromise()
  }


  createShotGun(shotgun){
    // console.log("Inside service create shotgun", shotgun);
    return this._http.post('/newshotgun', shotgun)
    .map(data=> data.json())
    .toPromise()
  }

  getallshotgun(user_id){
    return this._http.post('/shotguns', user_id)
    .map(data=>data.json())
    .toPromise()
  }

  
  

}
