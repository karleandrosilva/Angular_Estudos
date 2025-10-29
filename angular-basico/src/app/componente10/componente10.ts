import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente10',
  imports: [ReactiveFormsModule],
  templateUrl: './componente10.html',
  styleUrl: './componente10.css'
})
export class Componente10 {

  // criar um obj formulario 
  formulario = new FormGroup({
    // criar atributos que são caracteristicas do obj

    // criar atributos nome e cidade
    nome : new FormControl(''),
    cidade : new FormControl('')
  });


}
