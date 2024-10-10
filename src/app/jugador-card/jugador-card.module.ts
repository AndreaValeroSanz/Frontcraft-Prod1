import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorCardComponent } from './jugador-card.component';

@NgModule({
  declarations: [JugadorCardComponent],
  imports: [
    CommonModule // Import CommonModule here
  ],
  exports: [JugadorCardComponent] // Export the component if needed elsewhere
})
export class JugadorCardModule { }
