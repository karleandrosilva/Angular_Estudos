import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})
export class BtnPrimary {

  // declarar um input
  @Input("btn-text") btnText : string = ""; // começa vazio
  @Input() disabled : boolean = false;
  @Input() loading : boolean = false;
  @Output("submit") onSubmit = new EventEmitter(); // onclick (do angular core)

  // funcao submit = emite o evento 
  submit() {
    this.onSubmit.emit();
  }
}


//1:38