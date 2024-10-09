import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import	{JugadorCardComponent} from './jugador-card/jugador-card.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JugadorCardComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontcraft-Prod1';
}
