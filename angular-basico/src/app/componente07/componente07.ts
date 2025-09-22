import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  imports: [CommonModule],
  templateUrl: './componente07.html',
  styleUrl: './componente07.css'
})
export class Componente07 {

  // Variavel logica
  condicao : boolean = true;

  // lista de aprovados e reprovados
  lista : string[] = ['Aprovado', 'Reprovado', 'Aprovado', 'Reprovado'];

}
