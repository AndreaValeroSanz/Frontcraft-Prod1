// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersModule } from './players-component/players.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppSearchbar } from './Searchbar/searchbar.component';
import { CardGridModule } from './card-grid/Card-grid.module';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersModule, NavBarComponent, HeroComponent, CardGridModule, AppSearchbar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontcraft-Prod1';

  // Array completo de jugadores (datos iniciales)
  players = [
    { name: 'Jayson Tatum', ppg: '27.0', rpg: '7.1', apg: '5.7', age: 25, image: 'Players/playerCard1.webp' },
    { name: 'Kemba Walker', ppg: '25.0', rpg: '4.1', apg: '5.9', age: 29, image: 'Players/walker.webp' },
    { name: 'Stephen Curry', ppg: '26.0', rpg: '5.9', apg: '6.5', age: 34, image: 'Players/curry.webp' },
    { name: 'Lebron James', ppg: '26.0', rpg: '6.8', apg: '6.0', age: 38, image: 'Players/lebron.webp' },
    { name: 'Giannis Antetokounmpo', ppg: '24.0', rpg: '4.6', apg: '5.9', age: 28, image: 'Players/giannis.webp' },
    { name: 'Russell Westbrook', ppg: '25.0', rpg: '5.9', apg: '6.0', age: 35, image: 'Players/westbrook.webp' },
    { name: 'Nikola Jokic', ppg: '23.0', rpg: '4.1', apg: '5.0', age: 27, image: 'Players/jokic.webp' },
    { name: 'Dejounte Murray', ppg: '23.0', rpg: '3.0', apg: '5.0', age: 26, image: 'Players/murray.webp' },
    { name: 'Joel Embiid', ppg: '22.0', rpg: '3.5', apg: '4.5', age: 30, image: 'Players/embiid.webp' }
  ];

  // Jugadores filtrados para mostrar en CardGridComponent
  filteredPlayers = [...this.players];

  // Método para manejar el evento de filtro
  onFilterChange(filter: { name: string, age: number | null }) {
    this.filteredPlayers = this.players.filter(player =>
      player.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      (filter.age === null || player.age === filter.age)
    );
  }
}
