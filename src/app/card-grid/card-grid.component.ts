import { Component, Input } from '@angular/core';

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
  @Input() players: any[] = []; // Recibe jugadores filtrados a través de Input
}
