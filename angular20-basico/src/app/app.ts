import { Component, signal } from '@angular/core';
import { DiretivaStyle } from './diretiva-style/diretiva-style';

@Component({
  selector: 'app-root',
  imports: [DiretivaStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
