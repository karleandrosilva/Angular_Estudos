import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.html',
  styleUrl: './componente02.css'
})
export class Componente02 {

  //  função para exibir uma mensagem

  mensagem( ) {
    alert('Hello Word!');
  }
}
