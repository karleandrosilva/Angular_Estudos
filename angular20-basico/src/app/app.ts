import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { DataBindings } from "./data-bindings/data-bindings";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente, DataBindings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
