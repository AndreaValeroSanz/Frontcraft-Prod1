import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorCardComponent } from './jugador-card.component';

@NgModule({
  declarations: [
    JugadorCardComponent  // Declare your component here
  ],
  imports: [
    CommonModule  // Import CommonModule for directives like *ngIf, *ngFor
  ],
  exports: [
    JugadorCardComponent  // Export the component so other modules can use it
  ]
})
export class JugadorCardModule { }
