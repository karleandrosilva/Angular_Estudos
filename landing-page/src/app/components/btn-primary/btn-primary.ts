import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary"; // 

@Component({
  selector: 'btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})
export class BtnPrimary {

  // declarar um input
  @Input("btn-text") btnText : string = ""; // começa vazio (para no html colocar o que quiser)
  @Input() disabled : boolean = false; // tem que saber se tem disabled
  @Input() loading : boolean = false;
  @Input() variant : BtnVariants = "primary"  // variante para o botão

  @Output("submit") onSubmit = new EventEmitter(); // onclick (do angular core)

  // funcao submit = emite o evento 
  submit() {
    this.onSubmit.emit();
  }
}


//1:47