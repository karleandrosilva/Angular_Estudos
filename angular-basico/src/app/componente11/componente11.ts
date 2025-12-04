import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-componente11',
  imports: [ReactiveFormsModule, CommonModule],
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

  // variaveis visibilidade dos botoes
  btnCadastrar : boolean = true;

  // vetor
  vetor : Pessoa[] = [];

  // variavel para armazenar o indice da pessoa selecionada
  indice : number = -1; 


  // funcao de cadastro
  cadastrar() {
    // etapa 1 : Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa); // cadastrar um novo registro

    // etapa 2 : Limpeza dos inputs
    this.formulario.reset(); // limpeza de todas as informações

    // etapa 3: Visualização via console
    // console.table(this.vetor); (SÓ PARA TESTE)
  }

  // função de seleção
  selecionar(indice : number) {

    // atribuir o indice da pessoa
    this.indice = indice;

    // atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade,
    });

    // visibilidade dos botões
    this.btnCadastrar = false;
  }

  // funcao de alteracao
  alterar() {
    // alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // limpar os inputs
    this.formulario.reset(); 

    // visibilidade dos botões
    this.btnCadastrar = true; // mostra de volta o botao cadastrar
  }

  // funcao de remoção
  remover(){

    // removendo uma pessoa do vetor
    this.vetor.splice(this.indice, 1); //1info: indice | 2info: quantidade que ira remover

    // limpeza dos inputs
    this.formulario.reset();

    // visibilidade do botão
    this.btnCadastrar = true;
  }

  // funcao de cancelamento
  cancelar() {

    // limpeza dos inputs
    this.formulario.reset(); // limpa o que tem no formulario

    // deixar o botao de cadastrar ativado
    this.btnCadastrar = true;

  }
  
}
