import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {

  imagem : string = 'dia.jpeg';

  // função
  // quando não tiver retorno adicionar :void
  alterarIMagem():void {
    // não pode referenciar oo return
    this.imagem = this.imagem == 'dia.jpeg' ? 'noite.jpeg'  : 'dia.jpeg';
  }
}
