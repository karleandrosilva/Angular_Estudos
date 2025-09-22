import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  imports: [CommonModule],
  templateUrl: './componente06.html',
  styleUrl: './componente06.css'
})
export class Componente06 {

  // variavel contendo uma lingaguem (html, css, js)

  linguagem : string = 'HTML';

}
