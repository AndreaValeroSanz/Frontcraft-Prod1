// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import	{JugadorCardModule} from './jugador-card/jugador-card.module';
import	{NavBarComponent} from './nav-bar/nav-bar.component';
import { AppSearchbar } from './Searchbar/searchbar.component';
import { CardGridModule } from './card-grid/Card-grid.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppSearchbar, CardGridModule, JugadorCardModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Frontcraft-Prod1';
}