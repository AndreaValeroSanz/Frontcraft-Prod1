import { Component } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {
  // A simple array to render 9 cards in a grid
  cards = Array(9).fill(0);  // This will give us an array with 9 elements
}
