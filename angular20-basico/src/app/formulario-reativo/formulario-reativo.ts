import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css',
})
export class FormularioReativo {

  // formulário com dados pessoais
  pessoa = new FormGroup({ // objeto de formulário
    // atributos (características) | elemento de formulário
    nome : new FormControl(),
    idade : new FormControl()
  }); 


}
