import { Component, signal } from '@angular/core';
import { Bootstrap } from "./bootstrap/bootstrap";

@Component({
  selector: 'app-root',
  imports: [Bootstrap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-basico');
}
