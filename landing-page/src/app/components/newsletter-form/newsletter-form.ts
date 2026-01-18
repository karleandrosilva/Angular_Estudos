import { Component } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  imports: [BtnPrimary, ReactiveFormsModule],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.scss',
})
export class NewsletterForm {

  // declaração do atributo forms
  newsletterForm!: FormGroup;
  
  // construtor da classe
  // criar formGroup (Coleção de inputs)
  constructor() {
    this.newsletterForm = new FormGroup({
      
      // formControl (forma de controlar o input)
      name : new FormControl('',[Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email])
    });
  }






  
}
