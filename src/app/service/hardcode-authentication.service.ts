import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(uname,pass)
  {
    if(uname==="Jijo"&& pass==="Johns")
    {sessionStorage.setItem('authenticatedUser',uname)
      return true;
    }
    return false;
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatedUser')
  return !(user===null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
  }
}
