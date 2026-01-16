import { Component, signal } from '@angular/core';
import { ProjetoCrud } from './projeto-crud/projeto-crud';

@Component({
  selector: 'app-root',
  imports: [ProjetoCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
