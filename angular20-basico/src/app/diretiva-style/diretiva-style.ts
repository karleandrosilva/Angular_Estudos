import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  imports: [CommonModule],
  templateUrl: './diretiva-style.html',
  styleUrl: './diretiva-style.css',
})
export class DiretivaStyle {

  corFonte: string = 'yellow';
  corFundo : string = 'green';

  // função para alterar o estilo
  alterarEstilos():void { // void pq retornara algo
    this.corFonte = this.corFonte === 'yellow' ? 'blue' : 'yellow' // se for amarelo, vai alterar para azul. Caso ao contrario voltara para amarelo

    this.corFundo = this.corFundo === 'green' ? 'red' : 'green' // se for verde, vai alterar para vermelho. Caso ao contrario voltara para verde

    // adicionar (novo objeto)
    this.estiloTexto = {
      'color': this.corFonte,
      'background-color': this.corFundo
    }
  }

  // OUTRO ALTERNATIVA COM OBJETOS

  // objeto
  estiloTexto = {
    'color': this.corFonte,
    'background-color': this.corFundo
  }

}
