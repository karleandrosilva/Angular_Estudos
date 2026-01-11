import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary"; // Tipo que limita as variantes do botão

@Component({
  selector: 'btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})

export class BtnPrimary {
  // declarar um input
  @Input("btn-text") btnText : string = ""; // começa vazio (para no html colocar o que quiser) - texto do botão
  @Input() disabled : boolean = false; // Para saber se tem disabled -  define se o botão está desativado
  @Input() loading : boolean = false; // Usado para trocar o texto por "carregando..." - define se o botão está em loading
  @Input() variant : BtnVariants = "primary"  // variante para o botão - Só aceita "primary" ou "secondary"

  @Output("submit") onSubmit = new EventEmitter(); // onclick (do angular core)

  // Método chamado quando o botão é clicado
  submit() {
    this.onSubmit.emit(); // Dispara o evento para o componente pai
  }
}


//1:47