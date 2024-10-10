// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JugadorCardModule } from './jugador-card/jugador-card.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JugadorCardModule], // Update this line
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontcraft-Prod1';
}