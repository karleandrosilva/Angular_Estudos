import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  imports: [FormsModule],
  templateUrl: './componente09.html',
  styleUrl: './componente09.css'
})
export class Componente09 {

  nome : string = '';
  cidade : string = '';

}
