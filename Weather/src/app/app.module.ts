import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'; /*AGM Map module*/
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; /*Filter module*/
import {WeatherService}  from './weather.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ShareComponent } from './share/share.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShareComponent,
    AboutUsComponent,
    LoginComponent,
    MapComponent,
    WeatherInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDd0fl2krUBlMpv4iQL-TYVL4u7mXQd6zk'
    }),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [WeatherService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
