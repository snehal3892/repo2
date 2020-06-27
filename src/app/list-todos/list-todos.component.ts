import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo
{constructor
  (public id:number,public description:String,public done:boolean,public targetdate:Date)
  {}
}
  @Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo
  message:String
//todos=[new Todo(1,"To change job",false,new Date()),new Todo(2,"To get product based",false,new Date())]
  // todos=[{id:1,desc:"to switch job"},{id:2,desc:"to get in product based"},{id:3,desc:"to become rich"}]
  constructor(private todoservice:TodoDataService,private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }
  refreshTodos()
  {
    this.todoservice.retrieveAllTodos(this.todoservice.username).subscribe(
      response=>{
        console.log(response)
        this.todos=response 
      }
    )
  }
  deleteTodo(id)
  {
    console.log(`Deleted ${id}`)
    this.todoservice.deleteTodos(this.todoservice.username,id).subscribe(
      response=>
      {
        console.log(response);
        this.message=`Deleted ${id}`
        this.refreshTodos()
      }
      
    )
  }
  updateTodo(id)
  {
    console.log(`update ${id}`)
    this.router.navigate(['todo',id])
  }
  addTodo()
  {
    this.router.navigate(['todo',-1])
  }    

}
