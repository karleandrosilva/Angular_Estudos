import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';

// formatação das tarefas (interface do item)
export interface TodoItem {
  id : number;
  task : string ;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  todoList : TodoItem [] = []; // array para ser salvo
  newTask : string = '';

  // funcionalidade de adicionar a task
  addTask() : void {

    // verificar se para uma pessoa não salva uma task vazia
    if (this.newTask.trim()!== '') { // trim() remove espaços em branco do início e do fim do texto
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed : false 
      }
      this.todoList.push(newTodoItem)
      this.newTask = '' // para deixar vazio, após pressionar o botão
    }
  }

  // funcionalidade da lista das tarefas, após adicionar uma tak

  // componente do checkbox (para saber que esta completo)
  toggleCompleted(index:number) : void {
    this.todoList[index].completed = !this.todoList[index].completed // logica do completed
  }

  deleteTask(id:number) : void {

    this.todoList =this.todoList.filter(item => item.id != id)
    console.log(this.todoList)
  }
  
}

//43:48 - para salvar as info 
