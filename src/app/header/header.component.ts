import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn:boolean=false;
  username=""
  url=""

  constructor( public hardcodedAuthentication
    : HardcodeAuthenticationService,private service :TodoDataService) { }

  ngOnInit(): void {
    this.username=this.service.username
    
  }


}
