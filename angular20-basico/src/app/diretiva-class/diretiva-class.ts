import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  imports: [CommonModule],
  templateUrl: './diretiva-class.html',
  styleUrl: './diretiva-class.css',
})
export class DiretivaClass {

  // vetor de situação dos alunos
  alunos : string [] = ['aprovado', 'aprovado', 'reprovado', 'aprovado'];

}
