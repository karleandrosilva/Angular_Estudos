import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(1), Validators.max(120)]), // tipo numerico
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

}
