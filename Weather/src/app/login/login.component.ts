import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _weatherService:WeatherService) { }
 Emailerr;
 PassErr;
 NameErr;
 CPassErr;
 MobErr;
 obj;
 success=false;
 err=false;
 signUperr=false;
 user;
 httperr;
  ngOnInit() {
  }
  onClose(){
    this._weatherService.loginClose=false;
  }
  onSignIn(signInEmail:HTMLInputElement,signInPassword:HTMLInputElement){
    if(signInEmail.value==""||!(signInEmail.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))){
      this.Emailerr="Please enter valid Email!!";
      this.err=true;
   }
   else if(signInPassword.value==""||!(signInPassword.value.match(/[a-zA-Z0-9@_-]{6,}$/))){
     this.Emailerr="";
     this.PassErr="Please enter Password!!";
     this.err=true;
   }
   else{
     
     this._weatherService.getUser(signInEmail.value).subscribe(data =>{
       this.user=data;
       if(this.user.password!=signInPassword.value)
       {
         this.err=true;
         this.PassErr="Invalid Credentials";
       }
       else{
        this.err=false;
        this._weatherService.loginClose=false;
        this._weatherService.loginStatus="Logout";
       }
     },err=>{this.httperr=err.error; this.err=true; this.PassErr="Invalid Credentials"});
    

   }
  }

  onSignUp(signUpName:HTMLInputElement,signUpemail:HTMLInputElement,signUppass:HTMLInputElement,signUpCpass:HTMLInputElement,signUpMobile:HTMLInputElement){
    if(signUpName.value==""||!(signUpName.value.match(/[a-zA-Z]*$/))){
      this.NameErr="Please enter valid Name!!";
      this.signUperr=true;
   }
   else if(signUpemail.value==""||!(signUpemail.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))){
     this.NameErr="";
     this.Emailerr="Please enter valid Email!!";
      this.signUperr=true;
   }
   else if(signUppass.value==""||!(signUppass.value.match(/[a-zA-Z0-9@_-]{6,}$/))){
    
    this.NameErr="";
    this.Emailerr="";
    this.PassErr="Please enter Password!!";
     this.signUperr=true;
  }
  else if(signUpCpass.value==""||signUpCpass.value!=signUppass.value){
    
    this.NameErr="";
    this.Emailerr="";
    this.PassErr="";
    this.CPassErr="Password not matched!!";
     this.signUperr=true;
  }
  else if(signUpMobile.value==""||!(signUpMobile.value.match(/[7-9][0-9]{9}$/))){
    
    this.NameErr="";
    this.Emailerr="";
    this.PassErr="";
    this.CPassErr="";
    this.MobErr="Please enter 10 digit mobile number."
     this.signUperr=true;
  }

  else{
    this.MobErr="";
    this.signUperr=false;
    this.success=true;
    setTimeout(()=> { this.success=false; }, 5000);
    this.obj={ 
      Name:signUpName.value,
      Email:signUpemail.value,
      Password:signUppass.value,
      Mobile:signUpMobile.value

    }
    this._weatherService.onRegister(this.obj).subscribe(val => console.log(val));
  }
    
  }
  }


