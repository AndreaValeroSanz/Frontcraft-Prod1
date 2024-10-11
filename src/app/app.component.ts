// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JugadorCardModule } from './jugador-card/jugador-card.module';
import { HeroComponent } from './hero/hero.component'; // Importa el HeroComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JugadorCardModule, HeroComponent], // Agrega HeroComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontcraft-Prod1';
}
