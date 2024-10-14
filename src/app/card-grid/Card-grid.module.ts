import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { JugadorCardModule } from '../jugador-card/jugador-card.module'; // Import JugadorCardModule to use JugadorCardComponent

@NgModule({
  declarations: [
    CardGridComponent  // Declare the CardGridComponent here
  ],
  imports: [
    CommonModule,       // Import CommonModule for structural directives like *ngIf, *ngFor
    JugadorCardModule   // Import JugadorCardModule to use the JugadorCardComponent inside the grid
  ],
  exports: [
    CardGridComponent   // Export CardGridComponent so it can be used in other modules
  ]
})
export class CardGridModule { }
