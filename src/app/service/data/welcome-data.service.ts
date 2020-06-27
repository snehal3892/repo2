import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean
{
  constructor(public msg:String){}
 }
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
executeHelloWorldBeanService()
{
  return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
 //console.log("Hello Beans");
}
//http://localhost:8080/hello-world/path-variable/sn
executeHelloWorldBeanServicePathVariable(name)
{
  
  // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
  // let headers=new HttpHeaders({
  //   Authorization: basicAuthHeaderString
  // })
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,);
 //console.log("Hello Beans");
}
// createBasicAuthenticationHttpHeader()
// {
  
//   let username='user'
//   let password='password'
//   let basicAuthHeaderString='Basic ' +window.btoa(name +':' + password);
//   return basicAuthHeaderString;
// }

}
