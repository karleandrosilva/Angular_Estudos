import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// formatação das tarefas (interface do item)
export interface TodoItem {
  id : number;
  task : string ;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  todoList : TodoItem [] = []; // array para ser salvo
  newTask : string = '';

  // funcionalidade de adicionar a task
  
}
