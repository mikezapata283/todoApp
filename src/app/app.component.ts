import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Michael";
  todoInput = '';
  todos = [];
// User Inputs Name -> YourName's To Do List

//Creates to do list
createTodo() {
  this.todos.push({
    isChecked: false,
    name: this.todoInput,
  });
  this.todoInput="";
}
//Edit to do list
editTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  console.log('Index of that chore:' + index);


  this.todos[index].name = prompt('New To Do:');
}

//Delete to do
deleteTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  this.todos.splice(index, 1);
  }
}