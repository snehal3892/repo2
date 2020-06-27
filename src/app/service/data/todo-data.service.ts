import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 username="in28minutes";

  constructor(private http:HttpClient) { }
  retrieveAllTodos(username)
{
  return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`);
 
}
deleteTodos(username,id)
{
  return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
}
retreiveTodos(username,id)
{
  return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
}
updateTodos(username,id,todo)
{
  return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
}
createTodos(username,todo)
{
  return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
}
}
