import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiKey = "AIzaSyBE9gjVOx1b3DwRj3Ue0f6lUOMHgNgU76Y";
  locationObs = new Subject<string>;

  constructor(private http : HttpClient) {}

  GetLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( (position) => {
        this.getAddress(position.coords.latitude,position.coords.longitude);
      });
    } else {
      console.log("Your device dosen't record geolocation.")
    }
  }

  getAddress(latitude : number, longitude : number)
  {
    this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.apiKey}`)
    .subscribe( data => {
      console.log(data);
      this.locationObs.next(data.results[0].formatted_address);
    })
  }
}
