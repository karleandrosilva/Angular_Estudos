import { Component, signal } from '@angular/core';
import { FormularioReativo } from "./formulario-reativo/formulario-reativo";

@Component({
  selector: 'app-root',
  imports: [FormularioReativo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
