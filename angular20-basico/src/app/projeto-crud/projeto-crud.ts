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

  
  // cadastro de pessoas e listagem
  // método para efetuar o cadastro
  cadastrar() : void { // não vai ter retorno (por isso void)
    // etapa 1: pegar o obj Pessoa (form reativo) e add no vetor
    this.vetor.push(this.pessoa.value as Pessoa); // enviando o obj, informando que o obj possui as carcteriticas (nome, idade...) - referenciando Pessoa
    
    this.pessoa.reset(); // limpar o formulário reativo
  }
  
  // var. para armezenar o indice da pessoa selecionada 
  indicePessoaSelecionada : number = -1; // -1 = pois não é uma posição valida 
  
  // método para selecionar uma pessoa específica
  selecionar(indice:number) : void {

    // pegar o indice e atribuir ao pessoa selecionada
    this.indicePessoaSelecionada = indice;

    // exibir cada info da pessoa selecionada no forms
    this.pessoa.get('nome')?.setValue(this.vetor[indice].nome || '');
    this.pessoa.get('idade')?.setValue(this.vetor[indice].idade?.toString() || '');
    this.pessoa.get('cidade')?.setValue(this.vetor[indice].cidade || '');
    
    // visibilidade dos botões
    this.btnCadastrar = false;
  }

}
