import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
@NgModule({
  providers: [WeatherService]
})
export class ShareComponent implements OnInit {
 
  constructor(private _weather:WeatherService) { }

  ngOnInit() {
  }
  onClose(){
    this._weather.shareClose=false;
   
  }

}
