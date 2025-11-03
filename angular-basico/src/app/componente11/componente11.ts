import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente11',
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.html',
  styleUrl: './componente11.css'
})
export class Componente11 {

  // objeto de formulario

  formulario = new FormGroup({
    // atributos
    nome : new FormControl(''),
    idade : new FormControl(null), // tipo numerico
    cidade : new FormControl('')
  });

}
