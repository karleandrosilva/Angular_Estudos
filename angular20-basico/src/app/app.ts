import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
