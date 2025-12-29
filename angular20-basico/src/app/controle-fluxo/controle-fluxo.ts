import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-fluxo',
  imports: [CommonModule],
  templateUrl: './controle-fluxo.html',
  styleUrl: './controle-fluxo.css',
})
export class ControleFluxo {
 
  // condicional
  media : number = 5;

  // switch case
  linguagem : string = '';

  // laço de repetição

  nomes : string[] = ['Alice', 'Bianca', 'Ana'];

}
