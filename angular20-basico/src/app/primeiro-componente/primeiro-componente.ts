import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css',
})
export class PrimeiroComponente {

  nome : string = "Karleandro"; // interpolação de variaveis
 
  // interpolação de função 
  mensagem():string {
    return 'Hello Word!';
  }

  media : number = 10; // interpolação de operadores tenários


  pessoa = {
    nome : 'Karleandro',
    idade: 21
  };
}
