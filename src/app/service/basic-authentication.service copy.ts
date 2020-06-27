import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//copy of welcome data and hardcode service
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
  authenticate(uname,pass)
  {
    if(uname==="Jijo"&& pass==="Johns")
    {sessionStorage.setItem('authenticatedUser',uname)
    sessionStorage.setItem('token',uname)
      return true;
    }
    return false;
  }
  executeAuthenticationService(username,password)
{ 
let basicAuthHeaderString='Basic ' +window.btoa(username +':' + password);

  let headers=new HttpHeaders({
    Authorization: basicAuthHeaderString
  })
  return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers}).pipe(
    map(
      data=>{
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('token',basicAuthHeaderString);
        return data;
      }
    )
  );
 //console.log("Hello Beans");
}
executeJWTAuthenticationService(username,password)
{ 
return this.http.post<any>(`http://localhost:8080/authenticate`,{username,password}).pipe(
    map(
      data=>{
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('token',`Bearer ${data.token}`);
        return data;
      }
    )
  );
 //console.log("Hello Beans");
}

getAuthenticatedUser()
  {
    return sessionStorage.getItem('authenticatedUser')
  }
  
    getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
    {
return sessionStorage.getItem('token');
    }
  
  }
  


  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatedUser')
  return !(user===null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
  export class AuthenticationBean {
    constructor(public message:String){}
  }

