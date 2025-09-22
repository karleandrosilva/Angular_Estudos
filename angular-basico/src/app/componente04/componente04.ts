import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.html',
  styleUrl: './componente04.css'
})
export class Componente04 {

  // Variavel para exibir ou ocultar o quadrado
  exibir : boolean = false;

  // funçao para exibir ou ocultar o quadrado
  exibirAcao() {
    if(this.exibir === true ) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }



}
