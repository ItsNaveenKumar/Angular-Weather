import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
@NgModule({
  providers: [WeatherService]
})
export class MainPageComponent implements OnInit {
 share;
 search;
 currLat;
 currLon;
 markers:any=[];
 forecastData:any=[];
  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
    
  }
  onsearch(search:string){
    console.log(search);
    this._weatherService.cityName=search;
    this._weatherService.getByCityName()
    .subscribe(
      data => { this.markers=[];
         this.markers.push(data); 

        
         
         this._weatherService.markersByCityName=this.markers;
         this._weatherService.latt= this._weatherService.markersByCityName[0].coord.lat;
         this._weatherService.lngg=this._weatherService.markersByCityName[0].coord.lon;
         //console.log(this._weatherService.markersByCityName);
         this._weatherService.date=new Date(this.markers[0].dt*1000);
         this._weatherService.time=this._weatherService.date.toLocaleTimeString() ;
         this._weatherService.day=this._weatherService.days[this._weatherService.date.getDay()];
         
      //   this._weatherService.getForeCast().subscribe(
      //   data =>{
      //     this.forecastData=[];
      //     this.forecastData.push(data);
      //     this._weatherService.forecastData=this.forecastData;
      //   }
      // );
      

      },err=>{alert("City not Found!!");});

      
  }
  onShareOpen(){
    
   this._weatherService.shareClose=true;
   
  }
  onAboutOpen(){
    this._weatherService.aboutClose=true;
  }
  onLoginOpen(){
   
    if(this._weatherService.loginStatus=="Logout")
    {this._weatherService.loginClose=false;
    this._weatherService.loginStatus="Login";}
    else{
      this._weatherService.loginClose=true;
    }
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.currLat = position.coords.latitude;
        this.currLon = position.coords.longitude;
        this._weatherService.latt= position.coords.latitude;
        this._weatherService.lngg=position.coords.longitude;
        
        this._weatherService.getMarkers(this.currLat,this.currLon).subscribe(data=>
          {
            this.markers=[];
            this.markers.push(data);
            this._weatherService.markersByCityName=this.markers;
          })
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
