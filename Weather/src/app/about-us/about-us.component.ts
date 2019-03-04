import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
  }
 onClose(){
  this._weatherService.aboutClose=false;
 }
}
