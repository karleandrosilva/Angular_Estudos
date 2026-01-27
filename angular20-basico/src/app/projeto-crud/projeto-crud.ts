import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.css',
})
export class ProjetoCrud {

  // variavel para trabalhar com a visibilidade dos botões
  btnCadastrar : boolean = true; 

  // objeto do tipo FormGroup - REACTIVEFORMSMODULE
  pessoa = new FormGroup({
    // os atributos do obejetos
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // vetor para armazenar pessoas
  vetor: Pessoa[] = []; // só aceita pessoa e inicializa o vetor vazio

}
