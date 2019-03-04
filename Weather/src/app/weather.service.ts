import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  latt  = 20.5937;
  lngg = 78.9629;
 shareClose;
 aboutClose;
 loginClose;
 infoClose;
 cityName;
 markersByCityName;
 markersByLatLon;
  date;
  time;
  day;
obj;
forecastData;
loginStatus="Login";
  days=['Mon','Tue','Wed','Thurs','Fri','Sat','Sun','Mon','Tue','Wed','Thurs','Fri','Sat','Sun'];
  constructor(private httpClient: HttpClient) {
    
   
   }

   

  getMarkers(lat,lon): Observable<any> {
    return this.httpClient.get(
      'https://openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=b6907d289e10d714a6e88b30761fae22'
    )
  }

  getByCityName():Observable<any>{
    
    return this.httpClient.get(
      'https://openweathermap.org/data/2.5/weather?q='+this.cityName+'&units=metric&appid=b6907d289e10d714a6e88b30761fae22'
    )
  }
  getForeCast():Observable<any>{
    return this.httpClient.get(
      //'https://api.darksky.net/forecast/70ee46203f47f1b3c05cae26c573f8f5/'+lat+','+lon+'?exclude=[minutely,alerts,currently,flags]'
      'https://api.openweathermap.org/data/2.5/forecast?q='+this.markersByCityName[0].name+'&appid=dc687b71b37ee744bdc275804ea14681&units=metric'
      )
    
  }
  onSave(){
    this.obj={
      CityName:this.markersByCityName[0].name,
      Latitude:this.markersByCityName[0].coord.lat,
      Longitude: this.markersByCityName[0].coord.lon
    }
    console.log(this.obj);
    return this.httpClient.post(
      'http://localhost:52748/api/location',this.obj
      );

  }
  getSavedLocation(){
  return this.httpClient.get(
    'http://localhost:52748/api/location'
  );}

  onDelete(loc){
    return this.httpClient.delete(
      `http://localhost:52748/api/location/${loc}`
    )
  }

  onCity(cityName):Observable<any>{
    return this.httpClient.get(
      'https://openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=b6907d289e10d714a6e88b30761fae22'
    )

  }
  onRegister(obj){
    return this.httpClient.post(
      'http://localhost:52748/api/user',obj
      );
  }
  getUser(email):Observable<any>{
    return this.httpClient.get(
      `http://localhost:52748/api/user/${email}`
    )
  }
  
}
