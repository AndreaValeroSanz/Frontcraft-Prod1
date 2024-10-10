// src/app/jugador-card/jugador-card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent {
  isEnlarged = false;

  getClasses(): any {
    return {
      enlarged: this.isEnlarged
    };
  }

  toggleCardSize(): void {
    this.isEnlarged = !this.isEnlarged;
  }
}