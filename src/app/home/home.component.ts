import { Component } from '@angular/core';
import { AppSearchbar } from '../Searchbar/searchbar.component';
import { CardGridModule } from '../card-grid/Card-grid.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppSearchbar, CardGridModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Funcion para que al pulsar la flecha, te redirecione hacia la parte de arriba de la pagina
  goUp() {
    const element = document.getElementById('hero-section');
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

  }
  // Array completo de jugadores (datos iniciales)
  players = [
    { name: 'Jayson Tatum', ppg: '27.0', rpg: '7.1', apg: '5.7', height: '195', weight: '90', age: 25, image: 'Players/playerCard1.webp' },
    { name: 'Kemba Walker', ppg: '25.0', rpg: '4.1', apg: '5.9', height: '197', weight: '94',age: 29, image: 'Players/walker.webp' },
    { name: 'Stephen Curry', ppg: '26.0', rpg: '5.9', apg: '6.5', height: '189', weight: '85',age: 34, image: 'Players/curry.webp' },
    { name: 'Lebron James', ppg: '26.0', rpg: '6.8', apg: '6.0', height: '183', weight: '80',age: 38, image: 'Players/lebron.webp' },
    { name: 'Giannis Antetokounmpo', ppg: '24.0', rpg: '4.6', apg: '5.9', height: '199', weight: '98',age: 28, image: 'Players/giannis.webp' },
    { name: 'Russell Westbrook', ppg: '25.0', rpg: '5.9', apg: '6.0', height: '210', weight: '110',age: 35, image: 'Players/westbrook.webp' },
    { name: 'Nikola Jokic', ppg: '23.0', rpg: '4.1', apg: '5.0', height: '197', weight: '93',age: 27, image: 'Players/jokic.webp' },
    { name: 'Dejounte Murray', ppg: '23.0', rpg: '3.0', apg: '5.0', height: '186', weight: '83',age: 26, image: 'Players/murray.webp' },
    { name: 'Joel Embiid', ppg: '22.0', rpg: '3.5', apg: '4.5', height: '202', weight: '95',age: 30, image: 'Players/embiid.webp' }
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
