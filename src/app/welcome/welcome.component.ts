import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  nameSpring=''
  constructor(private route:ActivatedRoute,private bean:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMsg()
  {
    console.log(this.bean.executeHelloWorldBeanService());
    //this.bean.executeHelloWorldBeanService();
    this.bean.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrors(error)
    );
  }
  getWelcomeMsgParameter()
  {
   // console.log(this.bean.executeHelloWorldBeanServicePathVariable(this.name));
    
    this.bean.executeHelloWorldBeanServicePathVariable(this.name).subscribe(
      
       response=>{this.handleSuccessfulResponse(response)},
      error=>this.handleErrors(error)
    );
  }
  handleSuccessfulResponse(response)
    {
console.log(response);
this.nameSpring=response.msg;
    }
    handleErrors(error)
    {
    //  console.log(error)
    //    console.log(error.error)
    //   console.log(error.error.message)
this.nameSpring=error.error.message;

    }
    
  

}
