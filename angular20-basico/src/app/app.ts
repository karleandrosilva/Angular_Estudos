import { Component, signal } from '@angular/core';
import { DiretivaCustomizada } from "./diretiva-customizada/diretiva-customizada";

@Component({
  selector: 'app-root',
  imports: [DiretivaCustomizada],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
