import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
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

  // para as tarefas não sumir quando atualizar a página
  ngOnInit() { // roda automaticamanete assim que o componente nasce

    // localStorage = mini bd do navegador (guarda as info)
    const saved = localStorage.getItem('todoList'); // vai até o mini bd do navegador e procura se existe algo guardado com o nome 'todoList'

    // se encontrar alguma coisa
    if(saved) {

      // O navegador guarda tudo como TEXTO puro. 
      // O 'JSON.parse()' transforma esse texto de volta em uma lista (array) de objetos TypeScript.
      // Depois, joga a lista para dentro do 'this.todoList' para ela aparecer na tela.

      this.todoList = JSON.parse(saved); 
    }
  }

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

    // JSON.stringify(): Pega a lista de objetos e transforma em uma "linha de texto" (uma String)
    localStorage.setItem('todoList', JSON.stringify(this.todoList)); // para sempre salvar as tarefas quando adicionamos ou deletamos no localStorage
  }

  // funcionalidade da lista das tarefas, após adicionar uma tak

  // componente do checkbox (para saber que esta completo)
  toggleCompleted(index:number) : void {
    this.todoList[index].completed = !this.todoList[index].completed // logica do completed
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  deleteTask(id:number) : void {

    this.todoList =this.todoList.filter(item => item.id != id)
    console.log(this.todoList)
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  
}
