import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.html',
  styleUrl: './componente03.css'
})
export class Componente03 {

  // AULA 07 - PROPERTY BINDING

  // variavel de imagem
  imagem : string = 'assets/dia.jpg';

  // Função que alterna a imagem entre dia e noite
  alterarImagem() {
    if (this.imagem === 'assets/dia.jpg') { // 'this' referencia a variável da classe
      this.imagem = 'assets/noite.jpg';
    }
    else {
      this.imagem = 'assets/dia.jpg';
    }
  }

}
