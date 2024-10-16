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
      apg: '5.7'
    },
    {
      name: 'Kemba Walker',
      ppg: '25.0',
      rpg: '4.1',
      apg: '5.9'
    },
    {
      name: 'Stephen Curry',
      ppg: '26.0',
      rpg: '5.9',
      apg: '6.5'
    },
    {
      name: 'Lebron James',
      ppg: '26.0',
      rpg: '6.8',
      apg: '6.0'
    },
    {
      name: 'Giannis Antetokounmpo',
      ppg: '24.0',
      rpg: '4.6',
      apg: '5.9'
    },
    {
      name: 'Russell Westbrook',
      ppg: '25.0',
      rpg: '5.9',
      apg: '6.0'
    },  
    {
      name: 'Nikola Jokic',
      ppg: '23.0',
      rpg: '4.1',
      apg: '5.0'
    },
    {
      name: 'Dejounte Murray',
      ppg: '23.0',
      rpg: '3.0',
      apg: '5.0'
    }, 
    {
      name: 'Joel Embiid',
      ppg: '22.0',
      rpg: '3.5',
      apg: '4.5'
    }



    
  ];
  cards = Array(9).fill(0);  // This will give us an array with 9 elements
}
