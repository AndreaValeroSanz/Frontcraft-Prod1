import { Component } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  template: `
    <div class="grid-container">
      <app-players class="grid-item"
        *ngFor="let player of players"
        [playerData]="player">
      </app-players>
    </div>
  `,
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {
  // A simple array to render 9 cards in a grid
  players = [
    {
      name: 'Jayson Tatum',
      ppg: '27.0',
      rpg: '7.1',
      apg: '5.7',
      image: 'Players/playerCard1.webp'
    },
    {
      name: 'Kemba Walker',
      ppg: '25.0',
      rpg: '4.1',
      apg: '5.9',
      image: 'Players/walker.webp'
    },
    {
      name: 'Stephen Curry',
      ppg: '26.0',
      rpg: '5.9',
      apg: '6.5',
      image: 'Players/curry.webp'
    },
    {
      name: 'Lebron James',
      ppg: '26.0',
      rpg: '6.8',
      apg: '6.0',
      image: 'Players/lebron.webp'
    },
    {
      name: 'Giannis Antetokounmpo',
      ppg: '24.0',
      rpg: '4.6',
      apg: '5.9',
      image: 'Players/giannis.webp'
    },
    {
      name: 'Russell Westbrook',
      ppg: '25.0',
      rpg: '5.9',
      apg: '6.0',
      image: 'Players/westbrook.webp'
    },
    {
      name: 'Nikola Jokic',
      ppg: '23.0',
      rpg: '4.1',
      apg: '5.0',
      image: 'Players/jokic.webp'
    },
    {
      name: 'Dejounte Murray',
      ppg: '23.0',
      rpg: '3.0',
      apg: '5.0',
      image: 'Players/murray.webp'
    },
    {
      name: 'Joel Embiid',
      ppg: '22.0',
      rpg: '3.5',
      apg: '4.5',
      image: 'Players/embiid.webp'
    }
  ];

  cards = Array(9).fill(0);  // This will give us an array with 9 elements
}
