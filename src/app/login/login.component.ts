import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username=''
password=''
error="invalid id or pass"
invalidLogin=false;
  constructor( private route : Router,private hardCodedAuthentication :HardcodeAuthenticationService, private basicAuthentication:BasicAuthenticationService) { 

  }

  ngOnInit(): void {
  }
login()
{//if(this.uname==="Jijo"&& this.pass==="Johns")
if(this.hardCodedAuthentication.authenticate(this.username,this.password))
{
  this.route.navigate(['welcome',this.username]);
  this.invalidLogin=false
}
else
{
  this.invalidLogin=true
}
}
handleBasicAuthLogin()
{console.log('1st auth')
  this.basicAuthentication.executeAuthenticationService(this.username,this.password).subscribe(
  data=>{console.log(data)
  this.route.navigate(['welcome',this.username])
this.invalidLogin=false
},error=>{
  console.log(error)
  this.invalidLogin=true
}
)
}
handleJWTAuthLogin()
{console.log('1st auth')
  this.basicAuthentication.executeJWTAuthenticationService(this.username,this.password).subscribe(
  data=>{console.log(data)
  this.route.navigate(['welcome',this.username])
this.invalidLogin=false
},error=>{
  console.log(error)
  this.invalidLogin=true
}
)
}
  
}

